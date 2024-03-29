'use client'
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/usecase/signUp";
import { toast } from "@/components/ui/use-toast";
import { XCircle } from "lucide-react";

export const CreateAccountFormSchema = z.object({
    name: z.string().min(1, "Nome obrigatorio"),
    email: z.string().min(1, "Email obrigatorio").email('Insira uma email valido'),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
}).refine(
    (values) => {
        return values.password === values.confirmPassword
    },
    {
        message: "As senhas não coincidem!",
        path: ["confirmPassword"],
    }
);

export function CreateAccountForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(CreateAccountFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    const onSubimit = async (data: z.infer<typeof CreateAccountFormSchema>) => {
        setIsSubmitting(true)
        try {
            const userCredential = await signUp(data.name, data.email, data.password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem('token', token);
            router.push('/dashboard')
        } catch (error) {
            toast({
                title: 'Falha ao criar conta',
                description: 'Por favor tente novamente',
                variant: 'destructive',
                action: (<XCircle />)
            })
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full md:w-1/2">
            <Form {...form}>
                <form className="w-full flex flex-col gap-4 mt-8" onSubmit={form.handleSubmit(onSubimit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Nome" {...field} />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Confirmar senha" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-primary" disabled={isSubmitting}>
                        {isSubmitting && <Spinner />}
                        <p>{isSubmitting ? 'Criando conta' : 'Criar conta'}</p>
                    </Button>
                </form>
            </Form>
        </div>
    )
}