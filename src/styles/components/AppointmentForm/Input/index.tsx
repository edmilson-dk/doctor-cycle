import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(--white-primary);
  padding: 0 1rem;

  &:hover {
    > span svg {
      stroke: var(--green-second);
    }
  }
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray);

  &:nth-child(odd) {
    border-right: 1px solid var(--gray);
  }

  > input {
    outline: none;
    width: calc(100% - 3rem);
    height: 100%;
    border: none;
    padding: var(--space-1);
    padding-left: 0;
    background-color: transparent;

    font-size: var(--title-button);
    font-weight: var(--medium);
    text-align: left;
    color: var(--gray);
  }

  > span {
    width: 2rem;
    height: 100%;

    > svg {
      stroke: var(--gray);
    }
  }
`;