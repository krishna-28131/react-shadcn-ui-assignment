import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  })
  const [submitted, setSubmitted] = useState(null)

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Feedback Form</h2>

        <Input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Textarea
          placeholder="Your Feedback"
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />

        <Button onClick={() => setSubmitted(form)}>Submit</Button>

        {submitted && (
          <div className="text-sm bg-gray-100 p-3 rounded">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
