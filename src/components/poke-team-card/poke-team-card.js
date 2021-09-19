import React from "react";
import { Container, ImagePlaceholder, Button } from "./styles";

function PokeTeamCard({ id, name, imgageURL }) {
  const disable = !id;
  return (
    <Container disable={disable}>
      <ImagePlaceholder>
        {!disable && <img src={imgageURL} alt={`${id} - ${name}`} />}
      </ImagePlaceholder>
      {!disable && <Button>remove</Button>}
    </Container>
  );
}

export default PokeTeamCard;
