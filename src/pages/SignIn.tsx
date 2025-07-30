import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { useActionState } from "react";
import { AxiosError } from "axios";

const signInSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().trim().min(1, "Informe a senha"),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);
  const auth = useAuth();

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }
      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }
      return { message: "Não foi possivel entrar!" };
    }
  }
  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
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
      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>
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
