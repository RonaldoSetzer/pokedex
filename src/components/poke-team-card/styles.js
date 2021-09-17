import styled from "styled-components";

export const Container = styled.div`
  background: var(--boundary);
  width: 5rem;
  height: 7rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  border: 1px solid
    var(${({ disable }) => (!disable ? "--foreground" : "--background")});
`;

export const Button = styled.button`
  font-family: "Baloo 2";
  background: transparent;
  color: var(--danger);
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;

export const ImagePlaceholder = styled.div`
  background: var(--boundarysoft);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;
