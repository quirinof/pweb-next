import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1>CineCaicó</h1>
        <Link href="/movies">Filmes</Link> <br />
      </div>
    </div>
  );
}
