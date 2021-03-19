import { ReactNode } from "react";
import Container from "src/styles/components/Container";

import {
  ButtonsActionsWrapper,
  ButtonsActionsContainer
} from "src/styles/components/ButtonsActions";
import Button from "./Button";
import { FiCalendar, FiDollarSign, FiUsers } from "react-icons/fi";

function ButtonsActions() {
  return (
    <ButtonsActionsWrapper>
      <Container>
        <ButtonsActionsContainer>
          <Button 
            icon={<FiCalendar size="100%"/>}
            iconColor="#16D96D"
            text="Make an appointment"
          />
          <Button 
            icon={<FiUsers size="100%"/>}
            iconColor="#00AACC"
            text="Find an doctor"
          />
          <Button 
            icon={<FiDollarSign size="100%"/>}
            iconColor="#16D96D"
            text="Treatment Charges"
          />
        </ButtonsActionsContainer>
      </Container>
    </ButtonsActionsWrapper>
  );
}

export default ButtonsActions;