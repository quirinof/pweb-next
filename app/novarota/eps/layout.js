export default function RotaEpsLayout({ children }) {
  console.log("montando layout da rota Eps");
  return (
    <div>
      <header>
        <h1>Layout de Episodios</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
