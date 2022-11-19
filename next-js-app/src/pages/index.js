import styles from '../styles/Home.module.css'

export default function Home({ offers }) {
  return (
    <div>
      <h1>Offers</h1>
      <main className={styles.main}>
        {offers && offers.map(( offer ) =>
          <div key={`offer-${offer.id}`} className={styles.offersContainer}>
            <div className={styles.offerCover}>
              <img src={offer.cover} alt="" />
            </div>
            <div>
              <h3>{offer.name}</h3>
              <p>{offer.street}, {offer.postal_code} {offer.city}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/offers');
  const data = await response.json();

  return {
    props: {
      offers: data
    }
  }
}
