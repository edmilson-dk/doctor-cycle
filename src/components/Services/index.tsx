import { useState } from "react";

import Container from "src/styles/components/Container";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import TabStructure from "./TabStructure";

import { ServicesWrapper } from "src/styles/components/Services";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";

function Services() {
  const [ activeTab, setActiveTab ] = useState(0);

  const isButtonActive = (index: number): boolean => activeTab === index;

  const tabButtonsGroup = [
    <TabButton 
      key="tabButton1" 
      icon="assets/icons/doctor1.svg" 
      style={{backgroundColor: isButtonActive(0) && '#0ABF5B'}} 
      onClick={() => setActiveTab(0)} />,
    <TabButton 
      key="tabButton2" 
      icon="assets/icons/heart.svg" 
      style={{backgroundColor: isButtonActive(1) && '#0ABF5B'}}
      onClick={() => setActiveTab(1)} />,
    <TabButton 
      key="tabButton3" 
      icon="assets/icons/dna.svg" 
      style={{backgroundColor: isButtonActive(2) && '#0ABF5B'}}
      onClick={() => setActiveTab(2)} />,
    <TabButton 
      key="tabButton4" 
      icon="assets/icons/blood-bank1.svg" 
      style={{backgroundColor: isButtonActive(3) && '#0ABF5B'}}
      onClick={() => setActiveTab(3)} />,
    <TabButton 
      key="tabButton5" 
      icon="assets/icons/dentist.svg" 
      style={{backgroundColor: isButtonActive(4) && '#0ABF5B'}}
      onClick={() => setActiveTab(4)} />,
    <TabButton 
      key="tabButton6" 
      isLastButton={true}
      onClick={() => null} />,
  ];

  const tabContensGroup = [
    <TabContent 
      text="Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society. Founded by Wellington Nogueira in 1991, the association has already made more than one and"
      title="Get an free checkup"
      list={[
        'Full checkup', 'Secure prescription', 'Two frees reviews',
        'Full checkup', 'Secure prescription', 'Two frees reviews',
      ]}
      images={['assets/images/doctors-services/doctor-checkup.jpg', 'assets/images/doctors-services/doctor-cardogram.jpg']}/>,
    <TabContent 
      text="Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society. Founded by Wellington Nogueira in 1991, the association has already made more than one and"
      title="Get an free cardogram"
      list={[
        'Full checkup', 'Secure prescription', 'Two frees reviews',
        'Full checkup', 'Secure prescription', 'Two frees reviews',
      ]}
      images={['assets/images/doctors-services/doctor-dna.jpg', 'assets/images/doctors-services/doctor-cardogram.jpg']}/>,
    <TabContent 
      text="Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society. Founded by Wellington Nogueira in 1991, the association has already made more than one and"
      title="Get an free dna"
      list={[
        'Full checkup', 'Secure prescription', 'Two frees reviews',
        'Full checkup', 'Secure prescription', 'Two frees reviews',
      ]}
      images={['assets/images/doctors-services/doctor-dna.jpg', 'assets/images/doctors-services/doctor-vac.jpeg']}/>,
    <TabContent 
      text="Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society. Founded by Wellington Nogueira in 1991, the association has already made more than one and"
      title="Get an free vacinate"
      list={[
        'Full checkup', 'Secure prescription', 'Two frees reviews',
        'Full checkup', 'Secure prescription', 'Two frees reviews',
      ]}
      images={['assets/images/doctors-services/doctor-vac.jpeg', 'assets/images/doctors-services/doctor-dna.jpg']}/>,
    <TabContent 
      text="Founded by Wellington Nogueira in 1991, the association has already made more than one and a half million visits to hospitalized children, their companions and health professionals. From the interventions in hospitals, Doutores da Alegria expands channels of reflective dialogues with society. Founded by Wellington Nogueira in 1991, the association has already made more than one and"
      title="Get an free raio x"
      list={[
        'Full checkup', 'Secure prescription', 'Two frees reviews',
        'Full checkup', 'Secure prescription', 'Two frees reviews',
      ]}
      images={['assets/images/doctors-services/doctor-dna.jpg', 'assets/images/doctors-services/doctor-vac.jpeg']}/>,
  ];

  return (
    <ServicesWrapper>
      <Container>
        <SubTitle>Care you can believe in</SubTitle>
        <Title>Our Services</Title>
        <TabStructure tabButtons={tabButtonsGroup}>
          { tabContensGroup[activeTab] }
        </TabStructure>
      </Container>
    </ServicesWrapper>
  )
}

export default Services;