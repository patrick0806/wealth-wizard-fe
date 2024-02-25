'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./components/loginForm";
import { CreateAccountForm } from "./components/createAccountForm";

export function AuthFeature() {
    const [showLogin, setShowLogin] = useState(true)
    return (
        <div className="w-full h-full py-8 px-10 bg-background flex flex-col items-center justify-center relative">
            <div className="hidden lg:block absolute right-8 top-10">
                <Button
                    variant="ghost"
                    className="w-full text-lg lg:text-2xl"
                    onClick={() => setShowLogin(!showLogin)}
                >
                    {showLogin ? "Criar conta" : "Entrar"}
                </Button>
            </div>
            <h2 className="text-3xl font-bold">{showLogin ? 'Entrar' : 'Criar conta'}</h2>
            <span className="text-md opacity-70 text-center">
                {showLogin ? 'Digiete seu email e senha abaixo para acessar' : 'Preencha os campos para criar sua conta'}
            </span>
            {showLogin && <LoginForm />}
            {!showLogin && <CreateAccountForm />}
            <div className="block lg:hidden mt-8 w-full md:w-1/2">
                <Button
                    className="w-full text-lg lg:text-2xl"
                    onClick={() => setShowLogin(!showLogin)}
                >
                    {showLogin ? "Criar conta" : "Entrar"}
                </Button>
            </div>
        </div>
    )
}