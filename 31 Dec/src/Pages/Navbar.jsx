import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <h1 className="font-bold text-xl">Todos App</h1>
      {user && <Button onClick={logout}>Logout</Button>}
    </div>
  )
}
