import React from "react";
import { Division } from "../models/divistion";

function DivisionListItem(props: { division: Division }) {
  return <div>DIV: {props.division.name}</div>;
}

export default DivisionListItem;
