import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 5px;
  background: ${(props) => (props.selected ? "#ff0000" : "#fff000")};
`;

function Favourite({ selected }) {
  return <Background selected={selected} />;
}

export default Favourite;
