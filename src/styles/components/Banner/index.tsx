import styled from "styled-components"

export const BannerWrapper = styled.section`
  width: 100%;
  padding: var(--space-5) 0;
  background-image: url('assets/images/doctors-bg/bg-image.svg');
  background-position: center;
  background-size: cover;
`;

export const BannerContainer = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BannerContent = styled.article`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerTitle = styled.div`
  margin-bottom: var(--space-4);
  text-align: left;

  > h3 {
    font-size: var(--sub-title);
    color: var(--gray);
    font-weight: var(--medium);
    margin-bottom: var(--space-2);
  }

  > h1 {
    font-size: var(--title-main);
    color: var(--blue-dark);
    font-weight: var(--bold);
  }

`;

export const BannerButton = styled.button`
  height: 4rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > strong {
    background-color: var(--blue-primary);
    height: 100%;
    font-weight: var(--bold);
    font-size: var(--sub-title);
    text-align: left;
    color: var(--white-primary);
    padding: 0 var(--space-1);
  }

  > span {
    background-color: var(--blue-third);
    width: 4rem;
    height: 100%;
    padding: 5px;

    > svg {
      stroke: var(--white-primary);
    }
  }
`;
