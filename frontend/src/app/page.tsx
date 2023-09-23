import Board from "@/components/Board";

export default function Home() {
  return (
    <main
      className={`bg-slate-300 flex min-h-screen flex-col items-center pt-24`}
    >
      <h1 className="font-extrabold text-6xl text-center">Tik tak toe</h1>
      <Board />
    </main>
  );
}
