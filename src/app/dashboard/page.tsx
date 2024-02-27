'use client'

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { ResumeTransactions } from "@/feature/resumeTransactions/resumeTransactions";
import { DashboardDateRange } from "@/components/dashboardDateRange";
import { ExpenseByCategoryChart } from "@/feature/resumeTransactions/components/expenseByCategoryChart";
import { TransactionsTable } from "@/feature/resumeTransactions/components/transactionsTable";

export default function Dashboard() {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(new Date().setDate(1)),
        to: new Date(),
    })



    return (
        <>
            <Header />

            <div className="py-5 md:px-10 px-5">
                <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
                    <h1 className="text-3xl font-medium">Dashboard</h1>
                    <DashboardDateRange date={date} setDate={setDate} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
                    <div className="flex flex-col w-full gap-10">
                        <div className="flex flex-col md:flex-row justify-between gap-5">
                            <Card className="w-full border-gray-800">
                                <CardHeader className="w-full flex flex-row item-center justify-between">
                                    <p className="text-md font-medium text-gray-50/70">Total Gasto</p>
                                    <TrendingDown size={20} className="text-destructive" />
                                </CardHeader>
                                <CardContent className="text-2xl font-bold">
                                    R$ 4.000,00
                                </CardContent>
                            </Card>
                            <Card className="w-full border-gray-800">
                                <CardHeader className="w-full flex flex-row item-center justify-between">
                                    <p className="text-md font-medium text-gray-50/70">Total Ganho</p>
                                    <TrendingUp size={20} className="text-emerald-500" />
                                </CardHeader>
                                <CardContent className="text-2xl font-bold">
                                    R$ 4.000,00
                                </CardContent>
                            </Card>
                        </div>
                        <div className="max-w-full h-full md:h-[550px] border border-gray-800 rounded-lg bg-background p-4 space-y-8">
                            <h3 className="text-2xl font-medium text-gray-50/70">Despesas por categoria</h3>
                            <ExpenseByCategoryChart />
                        </div>
                    </div>
                    <TransactionsTable />

                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-5 py-8">
                    <Card className=" border-gray-800">
                        <CardHeader className="w-full flex flex-row item-center justify-between">
                            <p className="text-md font-medium">Total Gasto</p>
                            <TrendingDown size={20} className="text-destructive" />
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            R$ 4.000,00
                        </CardContent>
                    </Card>
                    <Card className=" border-gray-800">
                        <CardHeader className="w-full flex flex-row item-center justify-between">
                            <p className="text-md font-medium">Total Ganho</p>
                            <TrendingUp size={20} className="text-emerald-500" />
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            R$ 4.000,00
                        </CardContent>
                    </Card>
                </div> */}
            </div>
        </>
    )
}