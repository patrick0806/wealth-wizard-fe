import { Controller } from "react-hook-form";
import { Input } from "./ui/input";

export function CurrencyInput({ field, onChange, ...props }: any) {
    const handleOnChange = (e: any) => {
        const rawValue = e.target.value;
        let userInput = rawValue.replace(/[^0-9]/g, '');
        if (userInput === '') {
            onChange('R$  0,00');
        } else {
            let userInputAsNumber = parseInt(userInput, 10) / 100;
            let formattedNumber = `R$ ${userInputAsNumber.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`;
            onChange(formattedNumber);
        }
    };

    return <Input {...field} onChange={handleOnChange} {...props} />;
};