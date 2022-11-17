import { useRouter } from 'next/router';

function OfferComments() {
  const router = useRouter();
  console.log(router);
  const { id, commentId } = router.query;
  return (
    <div>
      <h1>Offer!</h1>
      <p>Offer id: {id}</p>
      <p>Offer Comments: {commentId}</p>
    </div>
  )
}

export default OfferComments;