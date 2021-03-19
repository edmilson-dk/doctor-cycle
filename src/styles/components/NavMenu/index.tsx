import styled from "styled-components"

export const NavMenuWrapper =  styled.nav`
  width: 100%;
  background-color: var(--white-second);
  position: relative;
`;

export const NavMenuContainer =  styled.div`
  width: 100%;
  padding: var(--space-1) 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenuAppointmentButton =  styled.button`
  padding: var(--space-1);
  background-color: var(--green-primary);
  border-radius: var(--border-radius);
  z-index: 999;

  text-align: center;
  font-size: var(--title-third);
  font-weight: var(--semi-bold);
  color: var(--white-primary);
`;

export const NavMenuButtonMenu =  styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: transparent;

  &:hover span > svg,
  &:focus span > svg {
    stroke: var(--green-third);
  }

  > span {
    width: 4rem;
    height: 4rem;

    > svg {
      stroke: var(--dark);
    }
  }
`;