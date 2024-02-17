import { BadgeDollarSign } from "lucide-react";
import { ThemeToggle } from "./themeToggle";
import { TransacationMenu } from "@/feature/transactionMenu/TransactionMenu";


export function Header() {
    return (
        <header className="flex flex-row items-center justify-between w-full h-1/6 bg-secondary dark:bg-background py-5 md:px-10 px-5">
            <h1 className="md:text-3xl text-xl flex items-center gap-2 font-bold text-foreground hover:text-primary cursor-pointer">
                <BadgeDollarSign />
                Wealth Wizard
            </h1>
            <div className="md:flex flex-row hidden gap-5">
                <TransacationMenu />
                <ThemeToggle />
            </div>
            <div className="md:hidden">
                <TransacationMenu />
            </div>
        </header>
    )
}
