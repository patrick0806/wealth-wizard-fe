'use client'
import { useState } from 'react'
import { Login } from "./components/login";

export function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="w-full space-y-4">
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl text-primary font-semibold'>Wealth Wizard</h2>
                <span className='text-sm font-light opacity-70'>Para acessar preencha seu email e sua senha</span>
            </div>
            <div className={isLogin ? "block" : "hidden"}>
                <Login />
            </div>
            <div className={isLogin ? "hidden" : "block"}>

            </div>
        </div>
    )
}