import { FiArrowRight } from "react-icons/fi";

import Container from "src/styles/components/Container";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";

import {
  AboutWrapper,
  AboutContainer,
  AboutContent,
  AboutLearnMore,
  AboutImageBg,
} from "src/styles/components/About";

function About() {
  return (
    <AboutWrapper>
      <Container>
        <AboutContainer>
          <AboutContent>
            <SubTitle>Welcome to Doctor Cicle</SubTitle>
            <Title>A Greate Place to Receive Care</Title>
              <p className='text'>
                Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society.
              </p>
            <AboutLearnMore>
              <strong>Learn more</strong>
              <span>
                <FiArrowRight size="100%"/>
              </span>
            </AboutLearnMore>

            <AboutImageBg>
              <img src="assets/images/doctors-bg/doctors-bg.png" />
            </AboutImageBg>
          </AboutContent>
        </AboutContainer>
      </Container>
    </AboutWrapper>
  )
}

export default About;