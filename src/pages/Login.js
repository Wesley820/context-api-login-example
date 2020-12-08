import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context'

export default function Login(){
  const history = useHistory()
  const { handleLogin } = useContext(AuthContext);
  const [input, setInput] = useState('')

  async function handleSubmitForm(e){
    e.preventDefault()

    if(!input) return;

    const response = await fetch(`https://api.github.com/users/${input}`)

    const { name, login } = await response.json()

    handleLogin({ name, login })

    history.push('/dashboard')
  }

  function handleChangeInput(e){
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input 
        type="text" 
        placeholder="Seu usuário do github" 
        value={input} 
        onChange={e => handleChangeInput(e)}
      />
      <button>Entrar</button>
    </form>
  )
}