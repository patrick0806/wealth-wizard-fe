'use client'
import z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Spinner } from "@/components/spinner";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CurrencyInput } from "@/components/currencyInput";

const ExpenseFormSchema = z.object({
    description: z.string().min(0, 'Descrição é obrigátorio'),
    value: z.string().min(1, "Valor obrigatorio"),
    category: z.string().min(1, "Categria obrigatorio"),
    date: z.date({ required_error: 'A data é obrigatória' }),
    type: z.string(),
})

const EXPENSE_CATEGORIES = [
    {
        label: 'Alimentação',
        value: 'FOOD'
    },
    {
        label: 'Lazer',
        value: 'LEISURE'
    },
    {
        label: 'Mercado',
        value: 'MARKET'
    },
    {
        label: 'Outros',
        value: 'OTHERS'
    },
];

type AddExpenseFormProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddExpenseForm({ setOpen }: AddExpenseFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof ExpenseFormSchema>>({
        resolver: zodResolver(ExpenseFormSchema),
        defaultValues: {
            description: '',
            value: '',
            category: '',
            type: 'EXPENSE',
        }
    });
    const onSubimit = async (data: z.infer<typeof ExpenseFormSchema>) => {
        setIsSubmitting(true)
        try {
            console.log(data);
            setOpen(false);
            toast({
                title: 'Despesa salva com sucesso',
                className: "bg-emerald-500",
                duration: 1000,
                action: (
                    <CheckCircle />
                )
            })
        } catch (error) {
            setIsSubmitting(false)
            toast({
                title: 'Falha ao salvar despesa',
                description: 'Por favor tente novamente',
                variant: 'destructive',
                action: <XCircle />
            })
        }
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form className="w-full flex flex-col gap-4 mt-8" onSubmit={form.handleSubmit(onSubimit)}>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Descrição" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <CurrencyInput placeholder="R$ 0,00" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione a categoria da despesa" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {EXPENSE_CATEGORIES.map((category) => (
                                            <SelectItem key={category.value} value={category.value}>
                                                {category.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl >
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "dd/MM/yyyy")
                                                ) : (
                                                    <span>Selecione a data da despesa</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            /*disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }*/
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-primary" disabled={isSubmitting}>
                        {isSubmitting && <Spinner />}
                        <p>{isSubmitting ? 'Cadastrando' : 'Cadastrar'}</p>
                    </Button>
                </form>
            </Form>
        </div>
    )
}