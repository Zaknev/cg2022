import logo from "./logo.svg";
import "./App.css";
import Componio from "./componio.js";

function App() {
  const amigos = [
    { nome: "Dinis", idade: 10 },
    { nome: "Helder", idade: 12 },
    { nome: "Ola", idade: "sim" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {amigos.map(({ nome, idade }) => {
          return <Componio nomee={nome} idadee={idade} />;
        })}
      </header>
    </div>
  );
}

export default App;
