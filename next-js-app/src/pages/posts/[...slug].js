import { useRouter } from 'next/router';
import Link from 'next/link';

function Post({ post }) {
  const router = useRouter();
  // console.log(router);
  const { slug } = router.query;
  return (
    <div>
      <p>Post: #{post.id}</p>
      <h1>{post.tile}</h1>
      <p>{post.body}</p>
      <div>
        <Link href="/posts">Back to posts</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {

  const postId = params.slug;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data
    }
  }
}

export default Post;