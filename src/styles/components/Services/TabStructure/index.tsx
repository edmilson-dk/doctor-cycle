import styled from "styled-components";

export const TabStructureWrapper = styled.article`
  width: 100%;

  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-4);

  background-color: transparent;


  @media screen and (min-width: 780px) {
     grid-template-columns: 7rem auto;
  }
`;

export const TabStructureButtonsContainer = styled.nav`
  width: 100%;
  height: 7rem;
  overflow: hidden;
  border-radius: var(--border-radius);

  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 780px) {
    height: 100%;
    width: 7rem;
    flex-direction: column;
  }
`;

export const TabStructureContent = styled.article`
  width: 100%;
  overflow: hidden;
`;