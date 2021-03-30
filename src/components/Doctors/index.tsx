import Container from "src/styles/components/Container";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";
import DoctorBox from "./DoctorBox";

import {
  DoctorsWrapper,
  DoctorsContainer,
  DoctorsContent,
} from "src/styles/components/Doctors";

function Doctors() {
  return (
    <DoctorsWrapper>
      <Container>
        <DoctorsContainer>
          <SubTitle>See what our customers have to say</SubTitle>
          <Title>Our success Doctors</Title>

          <DoctorsContent>
            <DoctorBox 
              image="assets/images/doctors/doctor-1.png"
              name="Glecy Kely"
              job="Oncology"
            />
            <DoctorBox 
              image="assets/images/doctors/doctor-2.png"
              name="Glecy Kely"
              job="Oncology"
            />
            <DoctorBox 
              image="assets/images/doctors/doctor-4.png"
              name="Glecy Kely"
              job="Oncology"
            />
             <DoctorBox 
              image="assets/images/doctors/doctor-5.png"
              name="Glecy Kely"
              job="Oncology"
            />
          </DoctorsContent>
        </DoctorsContainer>
      </Container>
    </DoctorsWrapper>
  )
}

export default Doctors;