"use client"

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type { ColumnDef, PaginationState } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import clsx from "clsx"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 20,
    pageIndex: 0,
  })

  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onPaginationChange: setPagination,

    state: {
      pagination
    }
  })

  console.log(table, data.length)

  return (
    <div >
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="py-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem 
              onClick={(e) => {
                e.preventDefault()
                table.previousPage()
              }}
              className={clsx(
                'cursor-pointer border h-full w-full flex items-center justify-center px-1.5 rounded-md mr-5 select-none',
                !table.getCanPreviousPage()
                    ? "pointer-events-none opacity-50"
                    : ""
              )} 
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </PaginationItem>
            {
              [...Array(table.getPageCount())].map((_, i) => (
                <PaginationItem 
                  key={i} 
                    onClick={(e) => {
                      e.preventDefault()
                      table.setPageIndex(i)
                    }}
                >
                  <PaginationLink href="#" isActive={table.getState().pagination.pageIndex === i} className="select-none">
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))
            }
            <PaginationItem
              onClick={(e) => {
                e.preventDefault()
                table.nextPage()
              }} 
              className={clsx(
                'cursor-pointer border h-full w-full flex items-center justify-center px-1.5 rounded-md ml-5 select-none',
                !table.getCanNextPage()
                    ? "pointer-events-none opacity-50"
                    : ""
              )} 
            >
              <ChevronRight size={16} strokeWidth={2} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}