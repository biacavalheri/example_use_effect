import { useEffect, useState } from 'react'
import axios from 'axios'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

function ComplexCounter() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Mensagem inicial')
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log(`O contador mudou para: ${count}`)
    console.log(`A mensagem mudou para: ${message}`)
  }, [count, message])

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
        setError('Não foi possível carregar uma nova piada.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [count, message])

  function incrementarContador() {
    setCount((valorAtual) => valorAtual + 1)
  }

  function atualizarMensagem() {
    setMessage(`Mensagem atualizada às ${new Date().toLocaleTimeString()}`)
  }

  return (
    <div>
      <h1>Contador complexo</h1>

      <section>
        <h2>Contagem</h2>
        <p>Valor atual: {count}</p>

        <button onClick={incrementarContador}>
          Incrementar contador
        </button>
      </section>

      <hr />

      <section>
        <h2>Mensagem</h2>
        <p>{message}</p>

        <button onClick={atualizarMensagem}>
          Atualizar mensagem
        </button>
      </section>

      <hr />

      <section>
        <h2>Piada</h2>

        {loading && <p>Carregando nova piada...</p>}

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
      </section>
    </div>
  )
}

export default ComplexCounter