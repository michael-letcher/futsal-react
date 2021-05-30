import React, { useEffect, useState } from 'react';
// import { db } from '../fire';
import { Division } from '../../models/divistion';
import DivisionListItem from './division-list-item';

function DivisionList({ divisionIds }: { divisionIds: string[] }) {
  useEffect(() => {
    getDivisions();
  });

  const [divisions, setDivisions] = useState<Division[]>([]);

  function getDivisions(): void {
    console.warn('get divs', divisionIds);
    setDivisions([]);

    // if (divisionIds.length) {
    //   db.collection('divisions')
    //     .where('id', 'in', divisionIds)
    //     .get()
    //     .then(querySnapshot => {
    //       console.log('empty?', querySnapshot.empty);
    //       console.log('docs', querySnapshot.docs);

    //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //       const fetchedDivisions: any = [];

    //       querySnapshot.forEach(div => {
    //         console.log('div', div.data());
    //         fetchedDivisions.push(div.data());
    //       });

    //       setDivisions(fetchedDivisions);
    //     });
    // }
  }

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
