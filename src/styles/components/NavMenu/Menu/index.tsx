import styled from "styled-components"

type ListItemProps = {
  isActive: boolean;
}

export const MenuWrapper = styled.article`
  width: 100%;
`;

export const MenuContainer = styled.div`
  width: 100%;
  padding: var(--space-4) var(--space-1);

  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;

export const MenuList = styled.nav`
  width: 100%;
  background-color: var(--white-primary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuInputSearch = styled.div``;
export const MenuListItem = styled.div<ListItemProps>``;

export const MenuShadow = styled.div``;