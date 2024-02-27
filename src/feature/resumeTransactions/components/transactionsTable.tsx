"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"

export type Transaction = {
    id: string
    description: string,
    value: number,
    date: Date,
    category: string,
    type: string,
}

const data: Transaction[] = [
    {
        id: "1",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "2",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "3",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "4",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "5",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "1",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "2",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "3",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "4",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
    {
        id: "5",
        description: "Salário",
        value: 5000,
        date: new Date(),
        category: "Freela",
        type: "INCOME",
    },
]

export const columns: ColumnDef<Transaction>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "description",
        header: "Descricão",
    },
    {
        accessorKey: "value",
        header: () => <div className="text-right">Valor</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("value"))
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "category",
        header: "Categoria",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("category")}</div>
        ),
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("type") === "INCOME" ? "Receita" : "Despesa"}</div>
        ),
    },
    {
        accessorKey: "date",
        header: "Data",
        cell: ({ row }) => (
            <div>{format(row.getValue("date"), "dd/MM/yyyy")}</div>
        ),
    },
]

export function TransactionsTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [filterType, setFilterType] = React.useState<string | undefined>()

    const filteredData = React.useMemo(() => {
        if (!filterType) {
            return data;
        }
        return data.filter(transaction => transaction.type === filterType);
    }, [filterType]);

    const handleCleanFilters = () => {
        setFilterType(undefined);
    }

    const table = useReactTable({
        data: filteredData,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full border border-gray-800 bg-background py-0 px-4 rounded-lg">
            <div className="flex items-center justify-between py-4">
                <h3 className="text-2xl font-medium text-gray-50/70">Transações</h3>
                <div className="w-full flex items-end justify-end gap-5">
                    <div className="w-44">
                        <Select onValueChange={value => setFilterType(value)} value={filterType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Tipo de transação" className="w-[50px]" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="INCOME">
                                    <div className="flex items-center gap-2">
                                        Renda
                                    </div>
                                </SelectItem>
                                <SelectItem value="EXPENSE">
                                    <div className="flex items-center gap-2">
                                        Despesa
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant="link" onClick={handleCleanFilters}>Limpar filtros</Button>
                </div>
            </div>
            <div>
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
                                    Sem resultados
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} de{" "}
                    {table.getFilteredRowModel().rows.length} linha(s) Selecionados.
                </div>
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
