import { FiCalendar, FiChevronDown, FiClock, FiMail, FiPhoneCall, FiUser } from "react-icons/fi";

import Container from "src/styles/components/Container";
import Button from "./Button";

import Input from "./Input";
import TextArea from "./TextArea";

import {
  AppointmentFormWrapper,
  AppointmentFormContainer,
  AppointmentFormText,
  AppointmentFormContent,
} from "src/styles/components/AppointmentForm";

function AppointmentForm() {
  return (
    <AppointmentFormWrapper>
      <Container>
        <AppointmentFormContainer>
          <AppointmentFormText>
            <h2>Make an appointment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </AppointmentFormText>
          <AppointmentFormContent>
            <div>
              <Input 
                name="name"
                inputType="text"
                placeholder="Name"
                icon={<FiUser size="100%"/>} />
              <Input 
                name="email"
                inputType="email"
                placeholder="Email"
                icon={<FiMail size="100%"/>} />
              <Input 
                name="date"
                inputType="text"
                placeholder="Date"
                icon={<FiCalendar size="100%"/>} />
              <Input 
                name="doctor"
                inputType="text"
                placeholder="Doctor name"
                icon={<FiChevronDown size="100%"/>} />
              <Input 
                name="gender"
                inputType="text"
                placeholder="Gender"
                icon={<FiChevronDown size="100%"/>} />
              <Input 
                name="phone"
                inputType="number"
                placeholder="Phone"
                icon={<FiPhoneCall size="100%"/>} />
              <Input 
                name="time"
                inputType="text"
                placeholder="Time"
                icon={<FiClock size="100%"/>} />
              <Input 
                name="department"
                inputType="text"
                placeholder="Department"
                icon={<FiChevronDown size="100%"/>} />
            </div>
            <TextArea 
              name="message"
              placeholder="Message" />
            <Button 
              onClick={() => alert("Submited!")}
            />
          </AppointmentFormContent>
        </AppointmentFormContainer>
      </Container>
    </AppointmentFormWrapper>
  )
}

export default AppointmentForm;