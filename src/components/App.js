import React from "react"
import blogData from "../data/blog"
import Header from "./Header"
import About from "./About"
import AList from "./AList"

console.log(blogData)

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About about={blogData.about} image={blogData.image} />
      <AList posts={blogData.posts} />
    </div>
  )
}

export default App
