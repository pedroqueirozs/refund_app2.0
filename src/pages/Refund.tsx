import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";

import fileSvg from "../assets/file.svg";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (params.id) {
      return navigate(-1);
    }

    console.log(name, amount, isLoading, category, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }
  const [category, setCategory] = useState("transport");
  const [name, setName] = useState("teste");
  const [amount, setAmount] = useState("35");
  const [isLoading, setLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

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
        disabled={!!params.id}
      />
      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
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
          disabled={!!params.id}
        />
      </div>
      {params.id ? (
        <a
          href="https://www.google.com/"
          target="blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="icone de arquvo" />
          Abrir comprovante
        </a>
      ) : (
        <Upload
          onChange={(e) => e.target.files && setFilename(e.target.files[0])}
          filename={filename && filename.name}
        />
      )}

      <Button isLoading={isLoading} type="submit">
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
