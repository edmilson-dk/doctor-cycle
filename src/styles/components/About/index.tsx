import styled from "styled-components"

export const AboutWrapper = styled.section`
  width: 100%;
  background-color: var(--white-primary);
  padding: var(--space-5) 0;
`;

export const AboutContainer = styled.div`
  width: 100%;
`;

export const AboutContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: var(--text);
    color: var(--gray);
    text-align: center;
    margin-bottom: var(--space-3);
  }
`;

export const AboutLearnMore = styled.button`
  background-color: transparent;
  height: 4rem;

&,
  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  > strong {
    font-size: var(--sub-title);
    font-weight: var(--semi-bold);
    color: var(--blue-second);
    text-align: left;
  }

  > span {
    height: 2.5rem;
    width: 2.5rem;

    > svg {
      stroke: var(--blue-second);
    }
  }
`

export const AboutImageBg = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: var(--space-2);

  > img {
    object-fit: cover;
    width: 100%;
  }
`;
