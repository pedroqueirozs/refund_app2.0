import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, amount, isLoading, category, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
    >
      <header>
        <h1 className="tex-xl font-bold text-gray-100">
          Solicitação de reenbolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reenbolso
        </p>
      </header>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        legend="Nome da solicitação"
      />
      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          legend="Valor"
          required
        />
      </div>

      <Upload
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
        filename={filename && filename.name}
      />
      <Button isLoading={isLoading} type="submit">
        Enviar
      </Button>
    </form>
  );
}
