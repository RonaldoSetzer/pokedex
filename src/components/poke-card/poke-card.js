import React from "react";
import { Container, Header, Title, ImagePlaceholder } from "./styles";

import { Favourite } from "../../assets/";

function PokeCard({ id, name, imgageURL, selected }) {
  const title = id ? `#${id} - ${name}` : "";
  return (
    <Container>
      <Header>
        <Favourite selected={selected} />
      </Header>
      <ImagePlaceholder>
        {id && <img src={imgageURL} alt={`${id} - ${name}`} />}
      </ImagePlaceholder>
      <Title>{title}</Title>
    </Container>
  );
}

export default PokeCard;
