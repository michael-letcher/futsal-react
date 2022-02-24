import React from 'react';
import { Link } from 'react-router-dom';
import { AppUrls } from '../../app-router';
import { Division } from '../../models/divistion';

function DivisionListItem({ division }: { division: Division }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>{division.name}</div>
      <Link to={`${AppUrls.table}/${division.id}`}>
        <div>Table</div>
      </Link>
      <Link to={`${AppUrls.fixture}/${division.id}`}>
        <div>Fixture</div>
      </Link>
    </div>
  );
}

export default DivisionListItem;
