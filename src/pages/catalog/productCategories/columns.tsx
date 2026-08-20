"use client"

import type { Category } from "@/scripts/types/categories"
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Наименование",
  },
  {
    accessorKey: "slug",
    header: "slug",
  },
  {
    accessorKey: "parentId",
    header: "Родитель",
  }
]