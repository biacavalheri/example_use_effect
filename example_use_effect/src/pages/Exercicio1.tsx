import { Link } from 'react-router-dom'
import UserList from "../components/UserList";

function Exercicio1() {
  return (
    <div>
      <Link to="/">
        <button>Voltar ao menu</button>
      </Link>

      <UserList />
    </div>
  )
}

export default Exercicio1;