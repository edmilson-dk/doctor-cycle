import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: var(--white-primary);
`;

export const HeaderContainer = styled.article`
  width: 100%;
  padding: var(--space-1) 0;

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

  @media screen and (min-width: 980px) {
    width: 100%;
  }
`;

export const HeaderMenuItemIcon = styled.span`
  width: 3rem;

  > svg {
    stroke: var(--blue-primary);
  }

   @media screen and (min-width: 980px) {
     width: 2.5rem;
   }
`;

export const HeaderMenuItemContent = styled.div`
  display: none;

  width: 170px;
  max-width: 180px;
  padding: 5px;
  
  background-color: var(--blue-dark);
  border-radius: var(--border-radius);
 
  position: absolute;
  top: 110%;
  right: calc(50% - 1rem);
  z-index: 9999;

  & > strong {
    font-size: var(--sub-title);
    color: var(--white-primary);
    font-weight: var(--semi-bold);
  } 

  & > p {
    font-size: 1.4rem;
    color: var(--white-primary);
    font-weight: var(--medium);
    margin-top: 5px;
  }

  @media screen and (min-width: 980px) {
    position: static;
    width: 200px;
    max-width: 200px;
    display: block; 
    background-color: transparent;

    & > strong {
      color: var(--blue-dark);
      font-size: 18px;
    } 

    & > p {
      font-size: 14px;
      color: var(--blue-dark);
    }
  }
`;