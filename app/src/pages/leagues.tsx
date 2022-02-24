import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import { League } from '../models/league';
import DivisionList from '../components/disvision-list/division-list';
import { getLeagues } from '../api/leagues';

function Leagues() {
  useEffect(() => {
    getData();
  }, []);

  const [leagues, setLeagues] = useState<League[]>([]);

  function getData(): void {
    getLeagues().then(res => setLeagues(Object.values(res.leagues)));
  }

  return (
    <div>
      <h1>Leagues</h1>

      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        {leagues.map(league => (
          <div
            key={league.id}
            className="list-item"
            style={{
              padding: '6px 12px',
              marginBottom: '16px',
            }}
          >
            <h2>{league.name}</h2>

            <DivisionList leagueId={league.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leagues;
