import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-background w-3/6 grid grid-cols-2 rounded-md">
        <div className="relative">
          <Image src="/login_mage.png" fill objectFit="cover" alt="Mago com muito dinheiro" />
        </div>
        <div className="p-5">
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
          <h1 className="text-3xl font-bold text-foreground">Seja bem-vindo ao Mago Financeiro</h1>
        </div>
      </div>
    </main>
  );
}
