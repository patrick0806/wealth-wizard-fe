import { Category } from "@/types/category";
import { SelectItem } from "./ui/select";

type SelectOptionsProps = {
    categories: Category[]
}

export function SelectOptions({ categories }: SelectOptionsProps) {
    return categories.map((category) => (
        <SelectItem value={category.value} key={category.value}>{category.description}</SelectItem>
    ))
}