'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export function ExpenseByCategoryChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const doughnutData = {
        labels: ['Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Outros'],
        datasets: [{
            label: 'R$',
            data: [1200, 800, 1500, 2000, 1000], // Valores fictícios para cada categoria
            backgroundColor: [
                'rgba(255,  99,  132,  0.2)', // Vermelho
                'rgba(54,  162,  235,  0.2)', // Azul
                'rgba(255,  206,  86,  0.2)', // Amarelo
                'rgba(75,  192,  192,  0.2)', // Verde
                'rgba(153,  102,  255,  0.2)' // Roxo
            ],
            borderColor: [
                'rgba(255,  99,  132,  1)', // Vermelho
                'rgba(54,  162,  235,  1)', // Azul
                'rgba(255,  206,  86,  1)', // Amarelo
                'rgba(75,  192,  192,  1)', // Verde
                'rgba(153,  102,  255,  1)' // Roxo
            ],
            borderWidth: 1,
        }]
    };
    return (
        <Doughnut
            data={doughnutData}
            options={{ plugins: { legend: { display: false } } }}
            className="m-auto w-full h-full"
        />
    )
}