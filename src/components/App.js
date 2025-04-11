// src/components/App.js
import React, { useState, useEffect } from "react"

function App() {
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setImageUrl(data.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  )
}

export default App
