import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const images = [
  "https://via.placeholder.com/300/ff0000",
  "https://via.placeholder.com/300/00ff00",
  "https://via.placeholder.com/300/0000ff",
]

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex((index + 1) % images.length)
  }

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <Card className="max-w-md mx-auto text-center">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Image Slideshow</h2>

        <img
          src={images[index]}
          alt="slide"
          className="mx-auto rounded"
        />

        <div className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}
