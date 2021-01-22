import React, { useEffect, useState } from "react";
import { db } from "../fire";

function Leagues() {
  
  useEffect(() => {
    getData();
  }, []);

  const [leages, setLeagues] = useState<any[]>([]);

  function getData(): void {
    db.collection('leagues').get().then((querySnapshot) => {
      querySnapshot.forEach(league => {

        console.log(league);
      })
      
    });

    const data = [
      { id: "1", name: "Monty Sunday" },
      { id: "2", name: "Monty Saturday" },
    ];

    setLeagues(data);
  }

  return (
    <div>
      <h1>Leagues</h1>

      <div>
        <ul>
          {/* {leages.map((league) => (
            <li>{league.name}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default Leagues;
