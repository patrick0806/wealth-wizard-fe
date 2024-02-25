'use client'

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

type DashboardDateRange = {
    date: DateRange | undefined,
    setDate: Dispatch<SetStateAction<DateRange | undefined>>
}
export function DashboardDateRange({
    date = {
        from: new Date(),
        to: new Date()
    },
    setDate
}: DashboardDateRange) {
    return (
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
                    {date.from ? (
                        date.to ? (
                            <>
                                {format(date.from, "LLL dd, y", { locale: ptBR })} -{" "}
                                {format(date.to, "LLL dd, y", { locale: ptBR })}
                            </>
                        ) : (
                            format(date.from, "LLL dd, y", { locale: ptBR })
                        )
                    ) : (
                        <span>Escolha as datas</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={new Date()}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                />
            </PopoverContent>
        </Popover>
    );
}