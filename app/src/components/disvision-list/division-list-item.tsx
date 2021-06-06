import React from 'react';
import { Link } from 'react-router-dom';
import { AppUrls } from '../../app-router';
import { Division } from '../../models/divistion';

function DivisionListItem({ division }: { division: Division }) {
  console.warn('DivisionListItem', division);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>{division.name}</div>
      <Link to={`${AppUrls.matches}/${division._id}/table`}>
        <div>Table</div>
      </Link>
      <Link to={`${AppUrls.matches}/${division._id}/fixture`}>
        <div>Fixture</div>
      </Link>
    </div>
  );
}

export default DivisionListItem;
