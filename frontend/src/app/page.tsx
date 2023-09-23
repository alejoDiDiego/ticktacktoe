import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  pt-24">
      <h1>Tik tak toe</h1>
      <Board />
    </main>
  );
}