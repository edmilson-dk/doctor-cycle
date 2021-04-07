import styled from "styled-components";

export const TextAreaWrapper = styled.textarea`
  width: 100%;
  min-height: 6rem;
  height: 6rem;
  max-height: 180px;
  
  background-color: var(--white-primary);
  border: none;
  outline: none;
  padding: var(--space-1);
  padding: var(--space-1);
   
  resize: vertical;
  font-size: var(--title-button);
  font-weight: 500;
  text-align: left;
  color: var(--blue-dark);


  @media screen and (min-width: 780px) {
    max-width: 100%;
  }
`;