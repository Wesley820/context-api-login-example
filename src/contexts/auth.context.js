import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('@hubgit:user')

    setUser(JSON.parse(user));
  }, [])

  function handleLogin(userProperties) {
    setUser(userProperties);
    
    const userToString = JSON.stringify(userProperties);

    localStorage.setItem('@hubgit:user', userToString);
  }

  function logout() {
    localStorage.removeItem('@hubgit:user')
    setUser('')
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useUser = () =>{
  return useContext(AuthContext)
}

export default AuthProvider;
