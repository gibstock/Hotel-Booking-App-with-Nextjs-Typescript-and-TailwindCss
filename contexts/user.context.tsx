import { createContext, useState, useEffect } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../firebase/clientApp'

export const UserContext = createContext<any>({
  setCurrentUser: () => null,
  currentUser: null
})

export const UserProvider = ({children}: any) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}