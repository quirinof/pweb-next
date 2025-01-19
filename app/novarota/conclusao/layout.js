export default function RotaConclusaoLayout({ children }) {
  console.log("montando layout da rota Conclusao");
  return (
    <div>
      <header>
        <h1>Layout de Conclusão</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
