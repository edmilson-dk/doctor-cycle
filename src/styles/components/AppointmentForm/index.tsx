import styled from "styled-components"

export const AppointmentFormWrapper = styled.section`
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 184, 221, 0.9), rgba(0, 184, 221, 0.9)), url("assets/images/doctors-bg/form-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: var(--space-3) 0;
`;

export const AppointmentFormContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppointmentFormText = styled.div`
  width: 100%;
  margin-bottom: var(--space-4);

  > h2 {
    font-size: var(--title-primary);
    font-weight: var(--bold);
    text-align: center;
    margin-bottom: var(--space-1);
    color: var(--white-primary);
  }

  > p {
    font-size: var(--text);
    color: var(--white-primary);
    text-align: center;
    font-weight: var(--semi-bold);
  }
`;

export const AppointmentFormContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: var(--border-radius);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
`;