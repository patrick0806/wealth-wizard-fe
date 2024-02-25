'use client'
import { ExpenseByCategoryChart } from "./components/expenseByCategoryChart";
import { TransactionsTable } from "./components/transactionsTable";

export function ResumeTransactions() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 py-5 gap-5">
            <TransactionsTable />
            <div className="max-w-full max-h-[500px] flex flex-col gap-5 justify-center">
                <span className="text-lg font-medium">Despesas por categoria</span>
                <ExpenseByCategoryChart />
            </div>
        </div>
    )
}