import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          ResuPro is in development!!
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-center">
          Completed Soon...!
        </h2>
      </main>
    </div>
  );
}
