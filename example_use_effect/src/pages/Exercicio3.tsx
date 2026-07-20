import { Link } from 'react-router-dom'
import RandomJoke from '../components/RandomJoke'

function Exercicio3() {
  return (
    <div>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>

      <RandomJoke />
    </div>
  )
}

export default Exercicio3