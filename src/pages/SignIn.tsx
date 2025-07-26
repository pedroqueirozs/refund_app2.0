import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useState } from "react";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  function onAction(formData: FormData) {
    console.log(formData.get("email"));
  }
  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        type="email"
        required
        legend="E-mail"
        placeholder="seu@email.com"
      />
      <Input
        name="password"
        type="password"
        required
        legend="Senha"
        placeholder="123456"
      />
      <Button isLoading={isLoading} type="submit">
        Entrar
      </Button>
      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-500 transition ease-linear"
      >
        {" "}
        Criar conta
      </a>
    </form>
  );
}
