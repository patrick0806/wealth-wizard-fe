import { cn } from "../lib/utils"

type HorizontalSeparatorProps = {
    className?: string
}

export function HorizontalSeparator({ className }: HorizontalSeparatorProps) {
    return (
        <div className={cn("w-full my-8 border-b border-gray-800", className)} />
    )
}