import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--foreground);
  width: 30rem;
`;

export const Header = styled.div`
  padding: 0.5rem;
  font-family: "Baloo 2";
  background: var(--boundary);
  color: var(--foreground);
`;

export const Content = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
`;
