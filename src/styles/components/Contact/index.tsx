import styled from "styled-components"

export const ContactWrapper = styled.section`
  width: 100%;
  background-color: var(--white-primary);
  padding: var(--space-4) 0;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactContent = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-3);
`;
