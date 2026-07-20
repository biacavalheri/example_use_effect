import { useEffect, useState } from 'react'
import axios from 'axios'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

function RandomJoke() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [reload, setReload] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError('')

    axios
      .get<Joke>('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => {
        setJoke(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar piada:', error)
        setError('Não foi possível carregar a piada.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [reload])

  function buscarNovaPiada() {
    setReload((valorAtual) => valorAtual + 1)
  }

  return (
    <div>
      <h1>Piada aleatória</h1>

      {loading && <p>Carregando piada...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && joke && (
        <div>
          <p>
            <strong>Pergunta:</strong> {joke.setup}
          </p>

          <p>
            <strong>Resposta:</strong> {joke.punchline}
          </p>
        </div>
      )}

      <button onClick={buscarNovaPiada} disabled={loading}>
        {loading ? 'Carregando...' : 'Buscar nova piada'}
      </button>
    </div>
  )
}

export default RandomJoke