import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--blue-dark);
  padding: var(--space-4) 0; 
`;

export const FooterContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 780px) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

export const FooterLogo = styled.div`
  width: 100%;
  max-width: 140px;

  > img {
    width: 100%;
  }
`;

export const FooterContent = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: var(--space-2) 0;

  > div:first-child {
    border-right: 1px solid var(--white-primary);

    > p:first-child {
      margin-bottom: var(--space-2);
    }
  }

  > div:last-child {
    padding-left: var(--space-2);
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  > div p {
    
    &:nth-child(1n) {
      margin-top: 5px;
    }
    
    font-size: var(--text);
    font-weight: var(--medium);
    color: var(--white-primary);
    text-align: left;

    & + & {
      margin-top: var(--space-1);
    }
  }

  > div h3 {
    text-align: left;
    font-size: var(--title-button);
    font-weight: var(--bold);
    color: var(--white-primary);
    margin-bottom: var(--space-2);
  }
`;

export const FooterNewsletter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: var(--space-3);

  > h3 {
    text-align: left;
    font-size: var(--title-button);
    font-weight: var(--bold);
    color: var(--white-primary);
    margin-bottom: var(--space-2);
  }

  > div {
    width: 100%;
    height: 5rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--gray);
    padding: 5px;
    display: flex;

     @media screen and (min-width: 780px) {
       max-width: 720px;
     }

    > input {
      width: calc(100% - 5rem);
      height: 100%;
      background-color: transparent;
      outline: none;
      border: none;
      padding-right: 5px;

      &,
      &::placeholder {
        font-size: var(--sub-title);
        color: var(--white-primary);
      }
    }

    > button {
      width: 5rem;
      height: 100%;
      border-radius: var(--border-radius);
      background-color: var(--blue-second);
      overflow: hidden;
      padding: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        width: 100%;
        height: 100%;

        > svg {
          stroke: var(--white-primary);
        }
      }
    }
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    max-width: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  > div span + span {
    margin-left: var(--space-1);
  }

  > div span {
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;

    > svg {
      stroke: var(--green-second);
    }
  }

  > p {
    font-size: var(--text);
    font-weight: var(--semibold);
    color: var(--white-primary);
    text-align: center;
  }
`;
