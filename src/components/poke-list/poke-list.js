import React from "react";

import { PokeCard } from "../../components";
import { Container, Header, Content } from "./styles";

function PokeList({ pokemons = [] }) {
  return (
    <Container>
      <Header>Pokemons</Header>
      <Content>
        {pokemons.map(({ imgageURL, id, name }) => (
          <PokeCard imgageURL={imgageURL} id={id} name={name} />
        ))}
      </Content>
    </Container>
  );
}

export default PokeList;

