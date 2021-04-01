import Container from "src/styles/components/Container";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";
import ContactBox from './ContactBox';

import {
  ContactWrapper,
  ContactContainer,
  ContactContent,
} from "src/styles/components/Contact";
import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

function Contact() {
  return (
    <ContactWrapper>
      <Container>
        <ContactContainer>
          <SubTitle>Get in touch</SubTitle>
          <Title>Contact</Title>

          <ContactContent>
            <ContactBox
              icon={<FiPhoneCall size="100%"/>}
              title="Emergency"
              firstDescription="0800-999-000"
              lastDescription="(73) - 9990-0009"
            />
            <ContactBox 
              icon={<FiMapPin size="100%"/>}
              title="Adress"
              firstDescription="EUA - Sul"
              lastDescription="New work - Av.190"
            />
            <ContactBox 
              icon={<FiMail size="100%"/>}
              title="Emails"
              firstDescription="dkdevelopmaster@gmail.com"
              lastDescription="doctor@gmail.com"
            />
            <ContactBox 
              icon={<FiClock size="100%"/>}
              title="Working hours"
              firstDescription="Mont to Sat 09.00-20:00"
              lastDescription="Sunday emergency only"
            />
          </ContactContent>
        </ContactContainer>
      </Container>
    </ContactWrapper>
  )
}

export default Contact;