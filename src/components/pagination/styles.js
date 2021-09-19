import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  li ~ li {
    margin-left: 0.5rem;
  }
`;

export const ListItem = styled.li`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--foreground);
  font-family: "Baloo 2";
  border: 1px solid var(--foreground);
  border-radius: 0.5rem;
  ${({ selected }) => selected && "font-weight: bold;"}
  ${({ selected }) => selected && "color: var(--secondary);"}
`;
