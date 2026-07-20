import { Link } from 'react-router-dom'
import Clock from "../components/Clock";

function Exercicio2() {
  return (
    <div>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>

      <Clock />
    </div>
  )
}
export default Exercicio2;