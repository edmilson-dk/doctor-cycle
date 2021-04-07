import styled from "styled-components";

export const NewsWrapper = styled.section`
  width: 100%;
  background-color: var(--white-second);
  padding: var(--space-4) 0;
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewsContent = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;
