import Image from "next/image";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddTransaction } from "@/feature/addTransaction/addTransaction";
import { CircleUserRound, CreditCard, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("token");
        router.push("/")
    }
    return (
        <header className="flex flex-row items-center justify-between w-full h-1/6 bg-secondary dark:bg-background py-5 md:px-10 px-5">
            <Image
                src="/logo.svg"
                alt="wealth wizardlogo"
                width={200}
                height={100}
            />

            <div className="flex flex-row items-center gap-5">
                <AddTransaction />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>PN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex gap-5"
                        >
                            <CircleUserRound />Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex gap-5"
                        >
                            <CreditCard /> Assinatura
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex gap-5"
                            onClick={handleLogout}
                        >
                            <LogOut /> Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
