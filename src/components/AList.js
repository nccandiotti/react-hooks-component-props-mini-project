import Article from "./Article"

function AList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        return (
          <Article
            title={post.title}
            date={post.date}
            preview={post.preview}
            key={post.id}
          />
        )
      })}
    </main>
  )
}

export default AList
