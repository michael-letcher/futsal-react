import React, { useEffect, useState } from 'react';
import { getDivisionsByLeagueId } from '../api/divisions';
import { getLeagues } from '../api/leagues';
import DivisionList from '../components/disvision-list/division-list';
import { TabList } from '../components/tab-list/tab-list';
import { Division } from '../models/divistion';
import { League } from '../models/league';

export default function Fixture() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [selectedLeague, setSelectedLeague] = useState<string>();
  
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<string>();

  useEffect(() => {
    getData();
  }, []);

  function getData(): void {
    getLeagues().then(res => {
      setLeagues(res.leagues);
      setSelectedLeague(res.leagues[0].id);
      getDivisions();
    });
  }
  

  function getDivisions(): void {
    if(selectedLeague) {
      getDivisionsByLeagueId(selectedLeague).then(res => {
        if (res && res.divisions) {
          setDivisions(res.divisions);
          setSelectedDivision(res.divisions[0].id);
        }
      });
    }
  }

  const onSelectLeague = (id: string) => setSelectedLeague(id);
  const onSelectDivision = (id: string) => setSelectedDivision(id);

  return (
    <>
      <h2>Fixture</h2>
      <TabList
        list={leagues.map(l => ({
          id: l.id,
          title: l.name,
          active: l.id === selectedLeague,
          onClick: onSelectLeague,
        }))}
      ></TabList>

      <TabList
        list={divisions.map(d => ({
          id: d.id,
          title: d.name,
          active: d.id === selectedDivision,
          onClick: onSelectDivision,
        }))}
      ></TabList>

      {selectedLeague ? (
        'Show fixture'
      ) : null}
    </>
  );
}
