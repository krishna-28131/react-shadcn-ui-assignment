import { auth } from "@/firebase/firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

export const authService = {
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signup: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
  onAuthChange: (setUser, setLoading) =>
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    }),
}
