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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Category } from "@/types/category"
import { SelectOptions } from "../../components/SelectOptions"
import { CurrencyInput } from "@/components/CurrencyInput"

type DrawerIncomeProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({
    value: z
        .string({ required_error: 'O valor é obrigatório' })
        .min(2, "O valor deve conter pelo menos 2 caracteres")
        .max(50, "O valor deve conter menos de 50 caracteres"),
    category: z.string().includes("SALARY").or(z.string().includes("INVESTMENT")),
})

const incomeCategories: Category[] = [
    {
        description: "Salário",
        value: "SALARY",
    },
    {
        description: "Investimentos",
        value: "INVESTMENT",
    },
]

export function DrawerIncome({ isOpen, setIsOpen }: DrawerIncomeProps) {
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
                        <DrawerTitle>Criar nova entrada</DrawerTitle>
                        <DrawerDescription>Informe os detalhes de sua nova entrada</DrawerDescription>
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
                                        <FormLabel>Categoria</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione a categoria da entrada" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectOptions categories={incomeCategories} />
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Form>
                    <DrawerFooter>
                        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Cadastrar Entrada</Button>
                        <DrawerClose asChild>
                            <Button variant="outline" className="bg-destructive text-white">Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

