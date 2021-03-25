import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  height: 5rem;
  background-color: var(--green-second);
  display: flex;
  justify-content: center;
  align-items: center;

  > strong {
    font-size: var(--title-button);
    font-weight: var(--semi-bold);
    text-align: left;
    color: var(--white-primary);
    margin-right: var(--space-2);
  }

  > span {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      stroke: var(--white-primary);
    }
  }
`;