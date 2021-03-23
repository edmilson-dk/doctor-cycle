import styled from "styled-components";

export const TabStructureWrapper = styled.article`
  width: 100%;

  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-4);

  background-color: transparent;
`;

export const TabStructureButtonsContainer = styled.nav`
  width: 100%;
  height: 7rem;
  overflow: hidden;
  border-radius: var(--border-radius);

  display: grid;
  grid-template-columns: repeat(5, 1fr) 4rem;
  justify-content: center;
  align-items: center;
`;

export const TabStructureContent = styled.article`
  width: 100%;
  overflow: hidden;
`;