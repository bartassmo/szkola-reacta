import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  return (
    <div>
      <h1>Post</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}

export default Post;