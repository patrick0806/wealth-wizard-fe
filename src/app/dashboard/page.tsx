import { Card, CardContent } from "@/components/ui/card";
import { FirstLetterUppercase } from "@/lib/firstLetterUppercase";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { TrendingDown, TrendingUp } from "lucide-react";

export default function Dashboard() {
    const monthName = FirstLetterUppercase(format(new Date(), "LLLL", { locale: ptBR }));
    return (
        <main className="md:p-10 p-5">
            <div className="grid md:grid-cols-5 grid-rows-2 gap-5">
                <Card className="border-destructive">
                    <CardContent className="grid grid-rows-2 p-4 gap-2">
                        <div className="flex items-center justify-between">
                            <h2 className="opacity-70">Despesa total ({monthName})</h2>
                            <TrendingDown className="text-destructive" />
                        </div>
                        <p className="text-xl font-semibold">R$ 0,00</p>
                    </CardContent>
                </Card>
                <Card className="border-success">
                    <CardContent className="grid grid-rows-2 p-4 gap-2">
                        <div className="flex items-center justify-between">
                            <h2 className="opacity-70">Renda total ({monthName})</h2>
                            <TrendingUp className="text-success" />
                        </div>
                        <p className="text-xl font-semibold">R$ 0,00</p>
                    </CardContent>
                </Card>
            </div>
        </main >
    );
}
