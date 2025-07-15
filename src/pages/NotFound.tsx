export function NotFound() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-gray-100 font-semibold text-2xl mb-10">Op's esta pagina não existe.😪</h1>
                <a className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear" href="/">Voltar para o inicio</a>
         </div>
        </div>
    )
}