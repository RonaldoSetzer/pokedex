import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: var(--boundary);
  color: var(--foreground);
  display: flex;
  align-items: center;

  padding: 0.5rem 0;

  font-size: 2rem;
  font-weight: 700;
`;

export const Line = styled.hr`
  margin: 0 0 1rem;
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
