import styled from "styled-components"

export const ContactBoxWrapper = styled.article`
  width: 100%;
  max-width: 300px;
  background-color: var(--white-second);
  border-radius: var(--border-radius);
  box-shadow: 0 0 3px 2px rgba(0,0,0,0.09);
  padding: var(--space-2);

  & + & {
    margin-top: var(--space-3);
  }
`;

export const ContactBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > span {
    width: 5rem;
    height: 5rem;

    > svg {
      stroke: var(--blue-second);
    }
  }

  > h3 {
    font-size: var(--title-button);
    font-weight: var(--bold);
    color: var(--blue-dark);
    text-align: left;
    margin-top: var(--space-1);
    margin-bottom: var(--space-2);
  }

  > p {
    font-size: var(--text);
    text-align: left;
    color: var(--blue-dark);
    font-weight: var(--semi-bold);
    
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;
