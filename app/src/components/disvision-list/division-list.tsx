import React, { useCallback, useEffect, useState } from 'react';
import { getDivisionsByLeagueId } from '../../api/divisions';
import { Division } from '../../models/divistion';
import DivisionListItem from './division-list-item';

function DivisionList({ leagueId }: { leagueId: string }) {
  const getData = useCallback(() => {
    console.warn('get divs', leagueId);
    getDivisionsByLeagueId(leagueId).then(res => {
      console.log('Found divs', res);
      if (res && res.divisions) {
        setDivisions(Object.values(res.divisions));
      }
    });
  }, [leagueId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const [divisions, setDivisions] = useState<Division[]>([]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {divisions.length
        ? divisions.map(div => (
            <DivisionListItem key={div._id} division={div} />
          ))
        : 'There are no divisions for this leaguge. Check back later.'}
    </div>
  );
}

export default DivisionList;
