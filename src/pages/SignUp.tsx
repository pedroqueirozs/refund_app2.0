import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        placeholder="Insira o seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        required
        legend="E-mail"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        required
        legend="Senha"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        required
        legend="Confirme a senha"
        placeholder="123456"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button isLoading={isLoading} type="submit">
        Cadastrar
      </Button>
      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-500 transition ease-linear"
      >
        {" "}
        Ja tenho uma conta
      </a>
    </form>
  );
}
