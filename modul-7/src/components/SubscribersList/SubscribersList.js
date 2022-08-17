import React, { useEffect, useState, useRef } from "react";
import base from "api/base";
import Subscriber from "components/Subscriber";

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: 'fit-content',
  margin: '0 auto',
}

function SubscribersList() {
  const [subs, setSubs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      base('Subscribers').select({view: "Grid"}).eachPage(function page(records, fetchNextPage) {

        setSubs(records);
        setLoading(false);
        fetchNextPage();

      }, function done(err) {
        if (err) {
          setError(true);
          setLoading(false);
          console.error(err);
          return;
        }
      });

      return () => {
        effectRan.current = true;
      }
    }
  }, []);

  return (
    <div style={styles}>
      {isLoading && !hasError && <p>Trwa wczytywanie...</p>}
      {hasError && <p>Wystąpił problem - szczegóły w konsoli.</p>}
      {subs.map((sub) => {
        return (
          <Subscriber key={sub.id} sub={sub} />
        )
      })}
    </div>
  )
}

export default SubscribersList;
