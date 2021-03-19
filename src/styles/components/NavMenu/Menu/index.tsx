import styled, { css } from "styled-components"

type ListItemProps = {
  isActive: boolean;
}

type MenuWrapperProps = {
  isOpen: boolean;
}

export const MenuWrapper = styled.article<MenuWrapperProps>`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: var(--white-primary);
  transition: left .6s linear;

  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ isOpen }) => isOpen 
    ? css`left: 0`
    : css`left: -110%`
  }
`;

export const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 7rem;

  display: grid;
  grid-template-columns: 1fr;
`;

export const MenuList = styled.nav`
  width: 100%;
  background-color: transparent;

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuInputSearch = styled.div`
  width: 100%;
  margin-bottom: var(--space-4);
  
  
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    padding: var(--space-1);
    height: 4rem;
    width: 100%;
    outline: none;

    font-size: var(--title-third);
    color: var(--gray);

    border-radius: var(--border-radius) 0 0 var(--border-radius);
    background-color: transparent;
    border: 2px solid var(--blue-third);
  }

  > input:focus,
  > input:hover {
    border-color: var(--green-third);
  }

  > button:focus,
  > button:hover {
    background-color: var(--green-third);
  }

  > button {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background-color: var(--blue-third);
    
    height: 4rem;
    width: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      height: 3rem;
      width: 3rem;

      > svg {
        stroke: var(--white-primary);
      }
    }
  }
`;

export const MenuListItem = styled.div<ListItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: var(--space-2);
  }

  > a {
    font-size: var(--title-button);
    font-weight: var(--semi-bold);
    text-align: left;
    padding: var(--space-1) var(--space-1) var(--space-1) 0;
    color: var(--blue-third);

    ${({ isActive }) => isActive && css`color: var(--green-third)`};
  }

  > span {
    width: 2rem;
    height: 2rem;
  }

  > span svg {
      width: 2rem;
      height: 2rem;
      stroke: var(--blue-third);
      ${({ isActive }) => isActive && css`stroke: var(--green-third)`};
  }
`;