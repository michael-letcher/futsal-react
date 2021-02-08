import React, { useEffect, useState } from "react";
import { db } from "../fire";
import { Division } from "../models/divistion";
import DivisionListItem from "./division-list-item";

function DivisionList(props: { divisionIds: string[] }) {
  useEffect(() => {
    getDivisions();
  }, []);

  const [divisions, setDivisions] = useState<Division[]>([]);

  function getDivisions(): void {
    console.warn("get divs", props.divisionIds);

    db.collection("divisions")
      .where("id", "in", props.divisionIds)
      .get()
      .then((querySnapshot) => {
        console.log("empty?", querySnapshot.empty);
        console.log("docs", querySnapshot.docs);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fetchedDivisions: any = [];

        querySnapshot.forEach((div) => {
          //
          console.log("div", div);
          fetchedDivisions.push(div);
        });

        setDivisions(fetchedDivisions);
      });
  }

  function saveDivision(): void {
    db.collection("divisions")
      .doc()
      .set({
        name: "Divison 1",
        leagueId: "",
        seasonIds: [""],
      } as Division);
  }

  return (
    <div>
      {divisions.map((div) => (
        <DivisionListItem key={div.id} division={div} />
      ))}
    </div>
  );
}

export default DivisionList;
