import React, { useEffect, useState } from "react";
import { db } from "../fire";
import { League } from "../models/league";

function Leagues() {
  useEffect(() => {
    getData();
  }, []);

  const [leagues, setLeagues] = useState<League[]>([]);

  function getData(): void {
    db.collection("league")
      .get()
      .then((querySnapshot) => {
        console.log("empty?", querySnapshot.empty);
        console.log("docs", querySnapshot.docs);

        // Cannot get Firebase to take my bloody interface!
        const fetchedLeagues: React.SetStateAction<League[]> = [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        querySnapshot.forEach((league: any) => {
          console.log(league.data());

          fetchedLeagues.push(league.data());
        });

        console.log(fetchedLeagues);

        setLeagues(fetchedLeagues);
      });
  }

  return (
    <div>
      <h1>Leagues</h1>

      <div style={{ display: "flex" }}>
        {leagues.map((league) => (
          <div
            style={{
              padding: "6px 12px",
              border: "solid 1px",
            }}
            key={league.id}
          >
            {league.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leagues;
