import React from "react";
import { List, ListItem } from "./styles";

function Pagination({ pages = [], selectedPage }) {
  return (
    <List>
      {pages.map(({ index }) => (
        <ListItem selected={index === selectedPage}>{index}</ListItem>
      ))}
    </List>
  );
}

export default Pagination;
