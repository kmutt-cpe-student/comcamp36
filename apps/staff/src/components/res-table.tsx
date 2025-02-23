"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { redirect, RedirectType } from "next/navigation"

export interface ResColumn {
    id: string,
    fullname: string | null,
    gender: string | null,
    /* nick: string, */
    phone: string | null,
    email: string,
}

interface ResTableProps {
    data: ResColumn[],
}


const filterKeys: Array<keyof ResColumn> = [
    "id",
    "gender",
    "fullname",
    /* "nick", */
    "phone",
    "email",
]
 

export function ResTable({ data }: ResTableProps){
    const [sorting, setSorting] = React.useState<SortingState>([])
    /* const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    ) */
    const [globalFilter, setGlobalFilter] = React.useState<string>("")
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({ id: false })
    const [rowSelection, setRowSelection] = React.useState({})

    const columns: ColumnDef<ResColumn>[] = [
        {
            accessorKey: "fullname",
            header: "Name",
            cell: ({ row }) => {
                const x = (row.getValue("fullname")) as string
                return (
                    <div>{x}</div>
                )
            },
      },
      /* {
            accessorKey: "nick",
            header: "Nick",
            cell: ({ row }) => (
                <div>{row.getValue("nick")}</div>
            ),
        }, */
        {
            accessorKey: "gender",
            header: "Gender",
            cell: ({ row }) => (
                <div>{row.getValue("gender")}</div>
            ),
        },
      
      {
          accessorKey: "phone",
          header: "Phone",
          cell: ({ row }) => (
              <div>{row.getValue("phone")}</div>
          ),
      },
      {
          accessorKey: "email",
          header: "Email",
          cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
      },
  ]
    
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        /* onColumnFiltersChange: setColumnFilters, */
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: (row, columnId, filterValue) => {
            const searchValue = String(filterValue).toLowerCase();
            return filterKeys.some((key) => {
                const cellValue = String(row.original[key] || "").toLowerCase();
                return cellValue.includes(searchValue);
            })
        },
        state: {
            sorting,
            /* columnFilters, */
            columnVisibility,
            rowSelection,
            globalFilter,
        },
    })
    return (
        <div className="w-[85vw] lg:w-[95vw] min-h-screen mx-10">
          <div className="flex items-center py-4">
            <Input
                placeholder="Search"
                value={table.getState().globalFilter ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    table.setGlobalFilter(event.target.value)
                }
                className="max-w-[10rem] lg:max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader className="bg-neutral-100">
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
                     
                      className="cursor-pointer"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell 
                          key={cell.id}
                          onClick={() => {
                            if (cell.column.id !== "action"){
                              redirect(
                                `/nong/${row.original.id}`,
                                RedirectType.push
                              )
                            }
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )
}