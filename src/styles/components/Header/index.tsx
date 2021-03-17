import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: var(--white-primary);
`;

export const HeaderContainer = styled.article`
  width: 100%;
  padding: var(--space-1);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  width: 100%;
  max-width: 140px;

  > img {
    width: 100%;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenuItem = styled.button`
  position: relative;
  width: 4rem;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;

  & + & {
    margin-left: var(--space-2);
  }

  &, & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover > div,
  &:focus > div {
    display: block;
  }
`;

export const HeaderMenuItemIcon = styled.span`
  width: 3rem;

  > svg {
    stroke: var(--blue-primary);
  }
`;

export const HeaderMenuItemContent = styled.div`
  display: none;

  width: 170px;
  max-width: 180px;
  padding: 5px;
  
  background-color: var(--green-second);
  border-radius: var(--border-radius);
 
  position: absolute;
  top: 110%;
  right: calc(50% - 1rem);

  & > strong {
    font-size: var(--sub-title);
    color: var(--white-primary);
    font-weight: 600;
  } 

  & > p {
    font-size: 1.4rem;
    color: var(--white-primary);
    font-weight: 500;
    margin-top: 5px;
  }
`;