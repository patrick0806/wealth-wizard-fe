'use client'
import z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { TbBrandFacebook, TbBrandGoogle } from "react-icons/tb"
import { HorizontalSeparator } from "@/components/horizontalSeparator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";

const LoginFormSchema = z.object({
    email: z.string().min(1, "Email obrigatorio").email('Insira uma email valido'),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export function LoginForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubimit = async (data: z.infer<typeof LoginFormSchema>) => {
        setIsSubmitting(true)
        console.log(data)

        const promise = new Promise((resolve) => setTimeout(resolve, 2000))
        await promise

        setIsSubmitting(false)
        router.push('/dashboard')
    }

    return (
        <div className=" w-full md:w-1/2">
            <Form {...form}>
                <form className="w-full flex flex-col gap-4 mt-8" onSubmit={form.handleSubmit(onSubimit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Email" {...field} />
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
                                <FormControl>
                                    <Input type="password" placeholder="Senha" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-primary" disabled={isSubmitting}>
                        {isSubmitting && <Spinner />}
                        <p>{isSubmitting ? 'Entrando' : 'Entrar'}</p>
                    </Button>
                </form>
            </Form>
            <div className="my-2 flex items-center gap-4">
                <HorizontalSeparator className="flex-1" />
                <p className="flex-2">ou continue com</p>
                <HorizontalSeparator className="flex-1" />
            </div>
            <Button className="w-full bg-gray-50 text-gray-800 mb-4 space-x-9 hover:text-white">
                <TbBrandGoogle size={18} />
                <p>Entrar com o google</p>
            </Button>
            <Button className="w-full bg-blue-500 space-x-9">
                <TbBrandFacebook size={18} />
                <p>Entrar com o facebook</p>
            </Button>
        </div>
    )
}