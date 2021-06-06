import React, { useState } from 'react';
import { createDivision } from '../api/division';
import { Division } from '../models/divistion';

export function CreateDivision({ leagueId }: { leagueId: string }) {
  const [name, setName] = useState('');

  function generateDiv(): void {
    const newDivision: Partial<Division> = {
      name,
      leagueId,
    };

    createDivision(newDivision)
      .then(res => {
        alert('Division Created');
      })
      .catch(err => {
        console.error(err);
        alert('Creation Failed');
      });
  }

  return (
    <>
      <div>Create League</div>

      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      <button onClick={generateDiv}>Create</button>
    </>
  );
}
