import { Auth } from "@/feature/Auth/Auth";
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-background md:w-3/6 w-full grid grid-cols-2 rounded-md">
        <div className="relative md:block hidden">
          <Image src="/login_mage.png" fill objectFit="cover" alt="Mago com muito dinheiro" className="rounded-l-md" />
        </div>
        <div className="md:p-16 p-5 md:col-span-1 col-span-2">
          <Auth />
        </div>
      </div>
    </main>
  );
}
