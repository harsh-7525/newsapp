import React, { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const alanKey = "a2589834fc4ac7bf292ee75776169ed62e956eca572e1d8b807a3e2338fdd0dc/stage"
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles)
        }
      }
    })
  }, []) //empty array ka matlab ki runs only one time

  return (
    <div>
      <h1>Alan AI News Applications</h1>
    </div>
  )
}

export default App
