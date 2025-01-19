export default function NovaRotaLayout({ children }) {
  console.log("Montando layout de Nova Rota");
  return (
    <div>
      <header>
        <h1>Layout da Nova Rota</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
