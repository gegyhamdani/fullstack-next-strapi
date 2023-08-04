import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const errorPage = () => {
  return (
    <main
      className={`max-w-2xl m-auto flex min-h-screen flex-col items-center justify-center p-8 ${inter.className}`}
    >
      <p className="text-xl">User Not Found</p>
    </main>
  );
};

export default errorPage;
