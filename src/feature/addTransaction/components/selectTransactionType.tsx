'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingDown, TrendingUp } from "lucide-react"

type SelectTransactionTypeProps = {
    setSelected: React.Dispatch<React.SetStateAction<string>>
}
export function SelectTransactionType({ setSelected }: SelectTransactionTypeProps) {
    return (
        <Select onValueChange={(value) => setSelected(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Tipo de transação" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="income">
                    <div className="flex items-center gap-2">
                        <p>Receita</p>
                        <TrendingUp className="text-emerald-500" />
                    </div>
                </SelectItem>
                <SelectItem value="expense">
                    <div className="flex items-center gap-2">
                        Despesa
                        <TrendingDown className="text-destructive" />
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}