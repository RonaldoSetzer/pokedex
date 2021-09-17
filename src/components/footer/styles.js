import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  background: var(--boundary);
`;

export const Line = styled.hr`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 0.2rem;
  border: none;
  background: linear-gradient(
    90deg,
    var(--primary) 50%,
    var(--secondary) 60%,
    var(--danger) 70%,
    var(--warning) 80%,
    var(--info) 90%
  );
`;
