import Link from "next/link";
import { MariaPrea } from "./components";

export default function NovaRotaHome() {
  return (
    <div>
      <Link href="/novarota/eps">Episodios</Link> <br />
      <Link href="/novarota/conclusao">Conclusao</Link> <br />
      <MariaPrea mensagem="Morreu Maria Preá, mas a história continua..." />
    </div>
  );
}
