import { Link } from 'react-router-dom'
import ComplexCounter from '../components/ComplexCounter'

function Exercicio4() {
  return (
    <div>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>

      <ComplexCounter />
    </div>
  )
}

export default Exercicio4