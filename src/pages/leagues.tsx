import React, { useEffect, useState } from "react";
import { db } from "../fire";
import { League } from "../models/league";
import { Link } from "react-router-dom";
import DivisionList from "../components/division-list";

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
      {/* <h1>Leagues</h1> */}

      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <style>
          {`
            .list-item:hover {
              color: #61DAFB
            }
          `}
        </style>

        {leagues.map((league) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={league.id}
            to={"/leagues/" + league.id}
          >
            <div
              className="list-item"
              style={{
                cursor: "pointer",
                padding: "6px 12px",
                border: "solid 1px",
                marginBottom: "16px",
              }}
            >
              {league.name}

              <DivisionList divisionIds={league.divisionIds} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Leagues;
