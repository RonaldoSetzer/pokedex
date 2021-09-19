import React from "react";

import { PokeTeamCard } from "../../components";
import { Container, Header, List, ListItem } from "./styles";

const formatPokemonList = (list, maxLength = 6) => {
  const newList = [
    ...list,
    ...Array(maxLength).fill(0),
  ];
  newList.length = maxLength;
  return newList;
};

function PokeTeam({ pokemons = [] }) {
  return (
    <Container>
      <Header>Team</Header>
      <List>
        {formatPokemonList(pokemons).map(({ imgageURL, id, name }) => (
          <ListItem>
            <PokeTeamCard imgageURL={imgageURL} id={id} name={name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default PokeTeam;
