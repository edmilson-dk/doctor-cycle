import styled, { css } from "styled-components";

type ButtonWrapperProps = {
  iconColor: string;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: 100%;
  max-width: 380px;
  height: 5rem;
  border-radius: var(--border-radius);
  padding: 0 var(--space-3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: var(--space-2);
  }

  ${({ iconColor }) => css`background-color: ${iconColor};`};
  
  > strong {
    font-weight: var(--bold);
    font-size: var(--title-button);
    text-align: left;
    color: var(--white-primary);
  }

  > span {
    width: 4rem;
    height: 100%;
    padding: 5px;

    > svg {
      stroke: var(--white-primary);
    }
  }
`;