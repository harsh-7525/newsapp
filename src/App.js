import React, { useState,useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = "a2589834fc4ac7bf292ee75776169ed62e956eca572e1d8b807a3e2338fdd0dc/stage"
const App = () => {

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      }
    })
  }, []) //empty array ka matlab ki runs only one time

  return (
    <div>
      <h1>Alan AI News Applications</h1>
      <NewsCards articles = {newsArticles} />
    </div>
  )
}

export default App
