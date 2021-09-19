import React from "react";
import { Pokeball } from "../../icons";

function Favourite({ selected }) {
  return <Pokeball disabled={!selected} width="1.5rem" height="1.5rem" />;
}

export default Favourite;
