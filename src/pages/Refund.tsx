import { useState } from "react"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"

export function Refund() {
    const [category, setCategory] = useState("")
    return (
        <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
            <header>
                <h1 className="tex-xl font-bold text-gray-100">Solicitação de reenbolso</h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">Dados da despesa para solicitar reenbolso</p>
            </header>

            <Input required legend="Nome da solicitação" />
            <div className="flex gap-4">
                <Select required legend="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {CATEGORIES_KEYS.map((category) => (
                        <option key={category} value={category}>
                            {CATEGORIES[category].name}
                        </option>
                    ))}
                </Select>
                <Input legend="Valor" required />
            </div>
            
        <Upload/>
    
        </form>
    )
}   