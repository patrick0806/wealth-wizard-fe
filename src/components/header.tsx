import Image from "next/image";

import { AddTransaction } from "@/feature/addTransaction/addTransaction";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between w-full h-1/6 bg-secondary dark:bg-background py-5 md:px-10 px-5">
            <Image
                src="/logo.svg"
                alt="wealth wizardlogo"
                width={200}
                height={100}
            />

            <div>
                <AddTransaction />
            </div>
        </header>
    )
}
