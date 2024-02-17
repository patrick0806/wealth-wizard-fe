'use client'
import { useState } from "react"
import { DrawerExpense } from "./components/DrawerExpense"
import { DrawerIncome } from "./components/DrawerIncome"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TrendingDown, TrendingUp } from "lucide-react"

export function TransacationMenu() {
    const [showIncomeDrawer, setShowIncomeDrawer] = useState(false)
    const [showExpenseDrawer, setShowExpenseDrawer] = useState(false)
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-primary">+</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Cadastro de transações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowIncomeDrawer(true)}>
                        <TrendingUp className="mr-2 h-4 w-4 text-success" />
                        <span>Cadastrar Entrada</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowExpenseDrawer(true)}>
                        <TrendingDown className="mr-2 h-4 w-4 text-destructive" />
                        <span>Cadastrar Saida</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DrawerIncome isOpen={showIncomeDrawer} setIsOpen={setShowIncomeDrawer} />
            <DrawerExpense isOpen={showExpenseDrawer} setIsOpen={setShowExpenseDrawer} />
        </>
    )
}