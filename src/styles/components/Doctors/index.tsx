import styled from "styled-components"

export const DoctorsWrapper = styled.section`
  width: 100%;
  background-color: var(--white-primary);
  padding: var(--space-4) 0;
`;

export const DoctorsContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const DoctorsContent = styled.div`
  width: 100%;
  padding: 1rem 0;
  overflow-x: auto;
  display: flex;
`;