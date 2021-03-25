import styled from "styled-components";

export const TabContentWrapper = styled.article`
  width: 100%;
  padding-top: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TabContentTitle = styled.h3`
  font-size: var(--title-second);
  font-weight: var(--bold);
  text-align: center;
  color: var(--dark);
  margin-bottom: var(--space-3);
`;

export const TabContentList = styled.ul`
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  column-gap: var(--space-2);

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    > span {
      width: 2rem;
      height: 2rem;

      > svg {
        stroke: var(--green-second);
      }
    }

    > strong {
      font-size: 1.5rem;
      font-weight: var(--bold);
      text-align: center;
      color: var(--dark);
      margin-bottom: 5px;
    }
  }
`;

export const TabContentText = styled.p`
  width: 100%;
  min-width: 0;
  text-align: left;
  font-size: var(--text);
  color: gray;
  margin: var(--space-3) 0;
`;

export const TabContentImages = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--space-3);
  justify-content: center;
  align-items: center;

  > div img {
    width: 100%;
    object-fit: cover;
  }
`;
