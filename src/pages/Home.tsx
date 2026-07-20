import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Aula 10 - useEffect</h1>
      <p>Escolha um exercício para executar:</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "250px",
          margin: "30px auto",
        }}
      >
        <Link to="/ex1">
          <button>Exercício 1</button>
        </Link>

        <Link to="/ex2">
          <button>Exercício 2</button>
        </Link>

        <Link to="/ex3">
          <button>Exercício 3</button>
        </Link>

        <Link to="/ex4">
          <button>Exercício 4</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;