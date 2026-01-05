import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { todoService } from "@/services/todo.service"
import { Button } from "@/components/ui/button"

export default function Todos() {
  const { user, logout } = useAuth()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService.getTodos(user.uid).then(setTodos)
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Button onClick={logout}>Logout</Button>
      </div>

      {todos.map(todo => (
        <div key={todo.id} className="border p-2 my-2 rounded">
          {todo.title}
        </div>
      ))}
    </div>
  )
}
