import styled from "styled-components";

export const Container = styled.div`
  background: var(--boundary);
  width: 8rem;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  border: 1px solid var(--foreground);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled.span`
  height: 1.5rem;
`;

export const ImagePlaceholder = styled.div`
  background: var(--boundarysoft);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;
