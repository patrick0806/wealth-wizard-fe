import { AuthFeature } from "@/feature/Auth/authFeature";
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
      <div className="w-full h-full py-8 px-10 flex flex-col justify-between">
        <Image
          src="/logo.svg"
          alt="wealth wizardlogo"
          width={300}
          height={100}
        />
        <h1 className="text-xl lg:text-3xl font-base">
          Você no controle da sua vida financeira, o mais completo na gestão das financas e projeções futuras
        </h1>
      </div>
      <AuthFeature />
    </main>
  );
}
