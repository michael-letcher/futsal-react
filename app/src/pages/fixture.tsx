import React, { useEffect, useState } from 'react';
import { getLeagues } from '../api/leagues';
import DivisionList from '../components/disvision-list/division-list';
import { TabList } from '../components/tab-list/tab-list';
import { League } from '../models/league';

export default function Fixture() {
  useEffect(() => getData(), []);

  const [leagues, setLeagues] = useState<League[]>([]);

  const [selectedLeague, setSelectedLeague] = useState<string>();

  function getData(): void {
    getLeagues().then(res => {
      setLeagues(Object.values(res.leagues));
      setSelectedLeague(Object.values(res.leagues)[0]._id);
    });
  }

  return (
    <>
      <h2>Fixture</h2>
      <TabList
        list={leagues.map(l => ({
          title: l.name,
          active: l._id === selectedLeague,
        }))}
      ></TabList>

      {selectedLeague ? (
        <DivisionList leagueId={selectedLeague}></DivisionList>
      ) : null}
    </>
  );
}
