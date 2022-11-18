import Link from "next/link";

function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map((post) =>
        <div key={`post-${post.id}`}>
          <h3>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 10),
    }
  }
}

export default Posts;