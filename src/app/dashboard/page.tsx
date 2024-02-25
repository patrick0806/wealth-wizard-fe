'use client'

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { ResumeTransactions } from "@/feature/resumeTransactions/resumeTransactions";

export default function Dashboard() {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })



    return (
        <>
            <Header />

            <div className="py-5 md:px-10 px-5">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-medium">Dashboard</h1>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y", { locale: ptBR })} -{" "}
                                            {format(date.to, "LLL dd, y", { locale: ptBR })}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y", { locale: ptBR })
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-5 py-8">
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
            </div>
        </>
    )
}