import { TbBrandFacebook, TbBrandGoogle } from "react-icons/tb"
import { HorizontalSeparator } from "@/components/horizontalSeparator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
    return (
        <div className=" w-full md:w-1/2">
            <form className="w-full flex flex-col gap-4 mt-8">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit" className="bg-primary">Entrar</Button>
            </form>
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