import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--foreground);
  width: 100%;
`;

export const Header = styled.h1`
  padding: 0.5rem;
  font-family: "Baloo 2";
  background: var(--boundary);
  color: var(--foreground);
`;

export const List = styled.ul`
  padding: 0.5rem;
  display: flex;
  list-style: none;

  li ~ li {
    padding-left: 0.5rem;
  }
`;
export const ListItem = styled.li``;
