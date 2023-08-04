import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`max-w-2xl m-auto flex min-h-screen flex-col items-center justify-center gap-[16px] p-8 ${inter.className}`}
    >
      <h2 className="text-5xl">Welcome to <b>linktr.ee copy</b></h2>
      <p className="text-xl">Type your name in browser search bar. ex: <b>/dea.aprizal</b></p>
    </main>
  );
}
