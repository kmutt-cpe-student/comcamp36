"use client"

import * as React from "react"
import {
  ColumnDef,
  /* ColumnFiltersState, */
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ActionCell } from "./actioncell"
import { redirect, RedirectType } from "next/navigation"
import { courseName } from "@/lib/const"

export interface YookbeerColumn {
    stdid: string,
    course: number,
    nameth: string | null,
    nameen: string,
    nickth: string | null,
    nicken: string,
    phone: string,
    emailper: string | null,
    emailuni: string | null,
    emerphone: string | null,
    facebook: string | null,
    lineid: string | null,
    instagram: string | null,
    discord: string | null,
    img: string | null,
}

interface YookbeerTableProps {
    data: YookbeerColumn[],
    isAdmin: boolean
}


const filterKeys: Array<keyof YookbeerColumn> = [
    "stdid",
    "nameth",
    "nameen",
    "nickth",
    "nicken",
    "phone",
    "instagram",
    "discord",
]
 

export function YookbeerTable({ data, isAdmin }: YookbeerTableProps){
    const [sorting, setSorting] = React.useState<SortingState>([])
    /* const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    ) */
    const [globalFilter, setGlobalFilter] = React.useState<string>("")
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({ 'emailper': false, 'discord': false, 'lineid': false, 'facebook': false,  })
    const [rowSelection, setRowSelection] = React.useState({})

    const columns: ColumnDef<YookbeerColumn>[] = [
      {
          accessorKey: "stdid",
          header: "ID",
          cell: ({ row }) => {
              const shrt = (row.getValue("stdid") as string).substring(7)
              return (
                  <div>{shrt}</div>
              )
          },
      },
      {
          accessorKey: "course",
          header: "Course",
          cell: ({ row }) => (
              <div>{courseName[row.getValue("course") as number]}</div>
          ),
      },
      {
          accessorKey: "nameth",
          header: "Name (TH)",
          cell: ({ row }) => {
              const x = (row.getValue("nameth") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "nameen",
          header: "Name",
          cell: ({ row }) => (
              <div>{row.getValue("nameen")}</div>
          ),
      },
      {
          accessorKey: "nickth",
          header: "Nick (TH)",
          cell: ({ row }) => {
              const x = (row.getValue("nickth") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "nicken",
          header: "Nick",
          cell: ({ row }) => (
              <div>{row.getValue("nicken")}</div>
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
          accessorKey: "emailper",
          header: "Email (per)",
          cell: ({ row }) => <div className="lowercase">{row.getValue("emailper")}</div>,
      },
      {
          accessorKey: "emailuni",
          header: "Email (uni)",
          cell: ({ row }) => <div className="lowercase">{row.getValue("emailuni")}</div>,
      },
      {
          accessorKey: "facebook",
          header: "FB",
          cell: ({ row }) => {
              const x = (row.getValue("facebook") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "lineid",
          header: "LINE",
          cell: ({ row }) => {
              const x = (row.getValue("lineid") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "instagram",
          header: "IG",
          cell: ({ row }) => {
              const x = (row.getValue("instagram") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "discord",
          header: "Discord",
          cell: ({ row }) => {
              const x = (row.getValue("discord") || "-") as string
              return (
                  <div>{x}</div>
              )
          },
      },
      {
          accessorKey: "action",
          header: "Action",
          cell: ({ row }) => ActionCell(row, isAdmin),
      },
  ]
    
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        initialState: {
            sorting: [
                {
                    id: 'stdid',
                    desc: false
                }
            ]
        },
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-neutral-100">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
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
                                `/std/${row.original.stdid}`,
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