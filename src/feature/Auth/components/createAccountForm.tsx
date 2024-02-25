import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreateAccountForm() {
    return (
        <div className="w-full md:w-1/2">
            <form className="w-full flex flex-col gap-4 mt-8">
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme sua senha" />
                <Button type="submit" className="bg-primary">Criar conta</Button>
            </form>
        </div>
    )
}