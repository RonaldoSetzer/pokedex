import React from "react";
import { List, ListItem } from "./styles";

function Pagination({ pages = [] }) {
  return (
    <List>
      {pages.map(({ index }) => (
        <ListItem>{index}</ListItem>
      ))}
    </List>
  );
}

export default Pagination;
