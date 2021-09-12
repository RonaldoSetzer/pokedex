import React from "react";
import { Container, Header, Title, ImagePlaceholder } from "./styles";

import { Favourite } from "../../assets/";

function PokeCard({ id = "000", name = "---", imgageURL, selected }) {
  const title = `#${id} - ${name}`;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Favourite selected={selected} />
      </Header>
      <ImagePlaceholder>
        <img src={imgageURL} alt={`${id} - ${name}`} />
      </ImagePlaceholder>
    </Container>
  );
}

export default PokeCard;
