import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      await signup(email, password)
      navigate("/todos")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Signup</h1>
      <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <Button onClick={handleSignup}>Signup</Button>
    </div>
  )
}
