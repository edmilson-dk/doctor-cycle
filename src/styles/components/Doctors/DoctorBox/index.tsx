import styled from "styled-components"

export const DoctorBoxWrapper = styled.article`
  min-width: 280px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  & + & {
    margin-left: var(--space-4);
  }
`;

export const DoctorBoxImage = styled.div`
  height: auto;
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DoctorBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  background-color: var(--white-second);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export const DoctorBoxText = styled.div`
  width: 100%;
  margin: var(--space-3) 0;

  > h3 {
    font-size: var(--title-button);
    font-weight: var(--semi-bold);
    text-align: center;
    margin-bottom: 5px;
    color: var(--blue-dark);
  } 

  > p {
    font-size: var(--text);
    font-weight: var(--medium);
    text-align: center;
    color: var(--blue-third); 
  }
`;

export const DoctorBoxIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
  width: 100%;
  padding: 0 5rem;

  > span {
    width: 3rem;
    height: 3rem;

    > svg {
      stroke: var(--gray);
    }
  }
`;

export const DoctorBoxButton = styled.button`
  width: 100%;
  padding: var(--space-1) 0;
  text-align: center;
  font-size: var(--title-button);
  font-weight: var(--semi-bold);
  color: var(--white-primary);
  background-color: var(--blue-second);
`;