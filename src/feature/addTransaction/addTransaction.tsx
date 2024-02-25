'use client'

import * as React from "react"
import { FaPlus } from 'react-icons/fa6';

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { AddExpenseForm } from "./components/addExpenseForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, TrendingUp } from "lucide-react";
import { SelectTransactionType } from "./components/selectTransactionType";
import { AddIncomeForm } from "./components/addIncomeForm";

export function AddTransaction() {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState("");
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={() => {
                setOpen(!open)
                setSelected("")
            }}>
                <DialogTrigger asChild>
                    <Button className="flex items-center gap-2">
                        <FaPlus size={20} />
                        <span className="hidden md:block">Adicionar Transção</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Cadastrar transação</DialogTitle>
                        <DialogDescription>
                            Adicione os detalhes da transação abaixo
                        </DialogDescription>
                    </DialogHeader>
                    <SelectTransactionType setSelected={setSelected} />
                    {selected === "income" && (
                        <AddIncomeForm setOpen={setOpen} />
                    )}
                    {selected === "expense" && (
                        <AddExpenseForm setOpen={setOpen} />
                    )}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="flex items-center">
                    <FaPlus size={20} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Cadastrar transação</DrawerTitle>
                    <DrawerDescription>
                        Adicione os detalhes da transação abaixo
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <SelectTransactionType setSelected={setSelected} />
                    {selected === "income" && (
                        <AddIncomeForm setOpen={setOpen} />
                    )}
                    {selected === "expense" && (
                        <AddExpenseForm setOpen={setOpen} />
                    )}
                </div>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="destructive">Cancelar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
