import React, { useCallback, useEffect, useState } from 'react';
import { getDivisionsByIds } from '../../api/divisions';
import { Division } from '../../models/divistion';
import DivisionListItem from './division-list-item';

function DivisionList({ divisionIds }: { divisionIds: string[] }) {
  const getData = useCallback(() => {
    console.warn('get divs', divisionIds);
    getDivisionsByIds(divisionIds).then(res => {
      console.log(res);

      setDivisions(Object.values(res.leagues));
    });
  }, [divisionIds]);

  useEffect(() => {
    getData();
  }, [getData]);

  const [divisions, setDivisions] = useState<Division[]>([]);

  // function saveDivision(): void {
  //   db.collection('divisions')
  //     .doc()
  //     .set({
  //       name: 'Divison 1',
  //       seasonIds: [''],
  //     } as Division);
  // }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {divisionIds.length
        ? divisions.map(div => <DivisionListItem key={div.id} division={div} />)
        : 'There are no divisions for this leaguge. Check back later.'}
    </div>
  );
}

export default DivisionList;
