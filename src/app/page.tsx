import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full min-h-screen grid grid-cols-2">
      <div className="w-full h-full bg-primary">
        <p>side one</p>
      </div>
      <div className="w-full h-full bg-background">
        <p> side two</p>
      </div>
    </main>
  );
}
