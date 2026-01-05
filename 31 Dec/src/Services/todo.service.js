import { db } from "@/firebase/firebase"
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore"

export const todoService = {
  getTodos: async (uid) => {
    const snap = await getDocs(collection(db, "todos"))
    return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(t => t.uid === uid)
  },
  createTodo: (todo) => addDoc(collection(db, "todos"), todo),
  updateTodo: (id, data) => updateDoc(doc(db, "todos", id), data),
  deleteTodo: (id) => deleteDoc(doc(db, "todos", id)),
}
