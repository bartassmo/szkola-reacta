import React, { useEffect, useState, useRef } from "react";
import base from "api/base";
import Campaign from "components/Campaign";

const styles = {
  display: 'table',
  maxWidth: 'fit-content',
  margin: '0 auto',
}

function CampaignsList() {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      base('Campaigns').select({view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
        setLoading(false);
        setCampaigns(records);
        fetchNextPage();

      }, function done(err) {
          if (err) {
            console.error(err);
            setError(true);
            setLoading(false);
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
      {campaigns.map((camp) => {
        return (
          <Campaign key={camp.id} camp={camp} />
        )
      })}
    </div>
  )
}

export default CampaignsList;
