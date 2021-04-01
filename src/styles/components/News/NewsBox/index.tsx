import styled from "styled-components"

export const NewsBoxWrapper = styled.article`
  width: 100%;
  background-color: var(--white-primary);
  border-radius: var(--border-radius);
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.030);
  overflow: hidden;

  & + & {
    margin-top: var(--space-3);
  }
`;

export const NewsBoxContainer = styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 250px 1fr;
  justify-content: center;
  align-items: center;
`;

export const NewsBoxImage = styled.div`
  width: 250px;
  height: 151px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NewsBoxContent = styled.article`
  width: 100%;
  padding: var(--space-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h3 {
    font-size: var(--text);
    color: var(--gray);
    text-align: left;
    margin-bottom: var(--space-1);
  }

  > p {
    font-size: 13px;
    color: var(--gray);
    text-align: left;
    margin-bottom: var(--space-1);
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    > span {
      width: 5rem;
      height: 2.5rem;
      font-size: 12px;
      color: var(--gray);
      display: flex;
      justify-content: space-between;
      align-items: center;

      > svg {
        width: 3rem;
        height: 3rem;
        margin-right: 5px;
        stroke: var(--gray);
      }
    }
  }
`;