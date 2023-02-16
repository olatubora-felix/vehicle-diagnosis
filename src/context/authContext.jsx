import { createContext } from 'react'

const AuthContext = createContext({
  loginDetails: {},
})

export const AuthContextProvider = ({ children }) => {
  const loginDetails = {
    email: 'mowareolusola@gmail.com',
    password: 'olusola1234',
    firstname: 'Olusola ',
    midlename: 'Emmanuel ',
    lastname: 'Moware',
  }

  return (
    <AuthContext.Provider value={{ loginDetails }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
