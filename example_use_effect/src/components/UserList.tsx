import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error)
        setError('Não foi possível carregar os usuários.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Carregando usuários...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Lista de usuários</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>
            <strong>Usuário:</strong> {user.username}
          </p>
          <p>
            <strong>E-mail:</strong> {user.email}
          </p>
          <p>
            <strong>Telefone:</strong> {user.phone}
          </p>
          <p>
            <strong>Site:</strong> {user.website}
          </p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default UserList