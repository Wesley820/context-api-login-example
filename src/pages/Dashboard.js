import { useHistory } from 'react-router-dom';
import { useUser } from '../contexts/auth.context'

export default function Dashboard() {
  const history = useHistory()
  const { logout, user } = useUser()

  function handleLogout() {
    logout()
    history.push('/')
  }

  return (
    <>
      <h1>{user?.login}</h1>
      <button onClick={handleLogout} >Sair</button>
    </>
  )
}
