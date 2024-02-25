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

export default function Dashboard() {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(new Date().setDate(1)),
        to: new Date(),
    })



    return (
        <>
            <Header />

            <div className="py-5 md:px-10 px-5">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-medium">Dashboard</h1>
                    <DashboardDateRange date={date} setDate={setDate} />
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col w-full md:w-1/2">
                        <div>
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
                        </div>
                        <ExpenseByCategoryChart />
                    </div>
                    <p>amigo</p>
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