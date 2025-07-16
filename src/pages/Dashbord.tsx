import { Input } from "../components/Input";

import React, { useState } from "react";

export function Dashboard() {
  const [name, setName] = useState("Pedro");
  function fetchRefund(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefund}
        className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Pesquisar pelo nome"
        />
      </form>
    </div>
  );
}
