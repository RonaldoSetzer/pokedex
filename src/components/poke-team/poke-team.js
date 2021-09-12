import React from "react";

import { PokeTeamCard } from "../../components";
import { Container, Header, Content } from "./styles";

function PokeTeam({ pokemons = [] }) {
  return (
    <Container>
      <Header>Team</Header>
      <Content>
        {pokemons.map(({ imgageURL, id, name }) => (
          <PokeTeamCard imgageURL={imgageURL} id={id} name={name} />
        ))}
      </Content>
    </Container>
  );
}

export default PokeTeam;
