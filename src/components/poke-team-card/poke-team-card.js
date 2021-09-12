import React from "react";
import { Container, ImagePlaceholder } from "./styles";

function PokeTeamCard({ imgageURL, id, name }) {
  return (
    <Container>
      <ImagePlaceholder>
        <img src={imgageURL} alt={`${id} - ${name}`} />
      </ImagePlaceholder>
      <span>{name}</span>
      {id && <button>remove</button>}
    </Container>
  );
}
export default PokeTeamCard;
