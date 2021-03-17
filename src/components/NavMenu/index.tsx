import { FiAlignCenter } from "react-icons/fi"

import Container from "src/styles/components/Container";

import {
  NavMenuWrapper,
  NavMenuContainer,
  NavMenuAppointmentButton,
  NavMenuButtonMenu
} from "src/styles/components/NavMenu";

function NavMenu() {
  return (
    <NavMenuWrapper>
      <Container>
        <NavMenuContainer>
          <NavMenuAppointmentButton>
            Appointment
          </NavMenuAppointmentButton>
          <NavMenuButtonMenu>
            <span>
              <FiAlignCenter size="100%"/>
            </span>
          </NavMenuButtonMenu>
        </NavMenuContainer>
      </Container>
    </NavMenuWrapper>
  );
}

export default NavMenu;