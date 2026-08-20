"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type { ColumnDef } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import { useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import clsx from "clsx"
import type { SetURLSearchParams } from "react-router"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
  pageParam: number
  totalPages: number
  setSearchParams: SetURLSearchParams
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageParam,
  totalPages,
  setSearchParams
}: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),

    pageCount: totalPages,
    manualPagination: true,

    state: {
      pagination: {
        pageIndex: pageParam - 1,
        pageSize: 10,
      }
    }
  })

  const handlePage = (page: number) => {
    table.setPageIndex(page)
    setSearchParams((prev) => ({
      ...prev,
      page: page
    }))
  }

  const pages = useMemo(() => {
    const firstPage = Math.max(1, pageParam - 2)
    const lastPage = Math.min(totalPages, pageParam + 2)

    return Array.from(
      { length: lastPage - firstPage + 1 },
      (_, index) => firstPage + index
    )
  }, [pageParam, totalPages])

  return (
    <div>

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
                  Данные не найдены
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="py-5">
        {
          totalPages > 2 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem 
                  onClick={(e) => {
                    e.preventDefault()
                    handlePage(table.getState().pagination.pageIndex)
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
                  4 <= pageParam && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }
                {
                  pages.map((page) => (
                    <PaginationItem 
                      key={page} 
                        onClick={(e) => {
                          e.preventDefault()
                          handlePage(page)
                        }}
                    >
                      <PaginationLink href="#" isActive={table.getState().pagination.pageIndex === page - 1} className="select-none">
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))
                }
                {
                  totalPages - 2 > pageParam && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }
                <PaginationItem
                  onClick={(e) => {
                    e.preventDefault()
                    handlePage(table.getState().pagination.pageIndex + 2)
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
          )
        }

      </div>
    </div>
  )
}