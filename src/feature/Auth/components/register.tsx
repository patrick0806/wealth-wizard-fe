import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(1, { message: 'O campo de nome é obrigátorio' }),
    email: z.string()
        .min(1, { message: 'O campo de email é obrigátorio' })
        .email("Informe um email valido"),
    password: z.string().min(1, { message: 'O campo de senha é obrigátorio' }),
})

export function Register() {
    const [isValidatingUser, setIsValidateUser] = useState(false);
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setIsValidateUser(true)
        setTimeout(() => {
            router.push("/dashboard")
            setIsValidateUser(false)
        }, 2000)
        console.log(data);
    }

    return (
        <>
            <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jhon Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="jhondoe@email.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input placeholder="********" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isValidatingUser} onClick={form.handleSubmit(onSubmit)}>
                        {isValidatingUser ? <Spinner /> : ""}
                        Criar conta
                    </Button>
                </form>
            </Form>
            <Separator className="my-4" />
            <div className="space-y-4 w-full">
                <Button type="submit" className="w-full bg-foreground text-primary hover:text-foreground">Entrar com o google</Button>
                <Button type="submit" className="w-full hover:text-primary hover:bg-foreground">Entrar com o facebook</Button>
            </div>
        </>
    )
}