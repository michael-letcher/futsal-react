import React, { useEffect, useState } from "react";

function Leagues() {
  // Runs on load
  useEffect(() => {
    getData();
  });

  const [leages, setLeagues] = useState<any[]>([]);

  const getData = () => {
    console.warn("TEST");

    const data = [
      { id: "1", name: "Monty Sunday" },
      { id: "2", name: "Monty Saturday" },
    ];

    setLeagues(data);
  };

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
