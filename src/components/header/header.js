import React from "react";
import { Pokeball } from "../../icons";
import { Container, Line } from "./styles";

function Header() {
  return (
    <>
      <Container>
        <Pokeball />
        <h1>Pokedex</h1>
      </Container>
      <Line />
    </>
  );
}

export default Header;
