import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (task.trim() === "") return
    setTodos([...todos, { text: task, done: false }])
    setTask("")
  }

  const toggleTodo = (index) => {
    const updated = [...todos]
    updated[index].done = !updated[index].done
    setTodos(updated)
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Todo List</h2>

        <div className="flex gap-2">
          <Input
            placeholder="New Todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox onCheckedChange={() => toggleTodo(i)} />
            <span className={todo.done ? "line-through" : ""}>
              {todo.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
