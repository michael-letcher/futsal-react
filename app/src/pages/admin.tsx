import React, { useEffect, useState } from "react";
import { getLeagues } from "../api/leagues";
import { db, fb } from "../fire";
// import { Division } from "../models/divistion";
import { League } from "../models/league";

function CreateDivision({ leagueId }: { leagueId: string }) {
  const [name, setName] = useState("");

  function generateDiv(): void {
    db.collection("divisions")
      .add({
        leagueId,
        name,
        seasonIds: [],
      })
      .then((res) => {
        db.collection("league")
          .doc(leagueId)
          .update({
            divisionIds: fb.firestore.FieldValue.arrayUnion(res.id),
          });
      });
  }

  return (
    <>
      <div>Create League</div>

      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button onClick={generateDiv}>Create</button>
    </>
  );
}

function Admin() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [leagueId, setLeagueId] = useState<string>("");

  useEffect(() => {
    getLeagues().then((leagues) => setLeagues(leagues));
  }, []);

  return (
    <div>
      <h1>Admin</h1>

      <div>
        <h2>Leagues</h2>

        <div>
          <div>Add League</div>

          <label>
            Name: <input type="text" />
          </label>

          <button>Create</button>
        </div>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {leagues.map((league) => (
              <tr key={league.id}>
                <td>{league.name}</td>
                <td>
                  <button onClick={() => setLeagueId(league.id)}>
                    Create Division
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>

        {leagueId ? (
          <CreateDivision leagueId={leagueId}></CreateDivision>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Admin;
