import styled, { css } from "styled-components";

type TabButtonWrapperProps = {
  isLastButton?: boolean;
}

export const TabButtonWrapper = styled.button<TabButtonWrapperProps>`
  width: 100%;
  height: 100%;
  padding: var(--space-1) var(--space-2);

  background-color: var(--blue-second);

  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    border-left: 1px solid var(--white-primary);
  }
  
  ${({ isLastButton }) => isLastButton && css`
    padding: 5px;
    background-color: var(--blue-dark);

    &:hover,
    &:focus {
      background-color: var(--dark);
    }


    span > svg {
     stroke-width: 1px;
    }
  `}

  > span {
    width: 90%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      stroke: var(--white-primary);
    }

    > img {
      width: 100%;
      object-fit: cover;
    }
  }

   @media screen and (min-width: 780px) {
      & + & {
        border-top: 1px solid var(--white-primary);
      }

      ${({ isLastButton }) => isLastButton && css`
        > span {
          width: 70%;
          height: 70%;
        }
      `}
    }
`;