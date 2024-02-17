import { Dispatch, SetStateAction } from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Category } from "@/types/category"
import { SelectOptions } from "../../components/SelectOptions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

type DrawerIncomeProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({
    value: z
        .string({ required_error: 'O valor é obrigatório' })
        .min(2, "O valor deve conter pelo menos 2 caracteres")
        .max(50, "O valor deve conter menos de 50 caracteres"),
    category: z.string().min(2).max(50),
    date: z.date({ required_error: 'A data é obrigatória' }),
})

const expenseCategories: Category[] = [
    {
        description: "Alimentação",
        value: "FOOD",
    },
    {
        description: "Lazer",
        value: "LEISURE",
    },
    {
        description: "Transporte",
        value: "TRANSPORT",
    },
    {
        description: "Saúde",
        value: "HEALTH",
    }

]

export function DrawerExpense({ isOpen, setIsOpen }: DrawerIncomeProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            value: "",
            category: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen} onClose={() => form.reset()}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Criar nova Despesa</DrawerTitle>
                        <DrawerDescription>Informe os detalhes de sua nova despesa</DrawerDescription>
                    </DrawerHeader>
                    <Form {...form}>
                        <div className="px-4 space-y-4">
                            <FormField
                                control={form.control}
                                name="value"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Valor</FormLabel>
                                        <FormControl>
                                            <Input placeholder="R$ 3.000,00" {...field} />
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
                                        <FormLabel>Categoria</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione a categoria da entrada" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectOptions categories={expenseCategories} />
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
                                        <FormLabel>Data da despesa</FormLabel>
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
                                                            <span>Selecione a data</span>
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
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>
                    <DrawerFooter>
                        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Cadastrar Entrada</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

