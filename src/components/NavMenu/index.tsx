import { useContext } from "react";
import { FiAlignCenter } from "react-icons/fi"

import { NavMenuContext } from "src/contexts/NavMenuContext";

import Container from "src/styles/components/Container";

import {
  NavMenuWrapper,
  NavMenuContainer,
  NavMenuAppointmentButton,
  NavMenuButtonMenu
} from "src/styles/components/NavMenu";

import Menu from "./Menu";

function NavMenu() {
  const { setOpenMenu } = useContext(NavMenuContext);

  return (
    <NavMenuWrapper>
      <Container>
        <NavMenuContainer>
          <NavMenuAppointmentButton>
            Appointment
          </NavMenuAppointmentButton>
          <NavMenuButtonMenu onClick={setOpenMenu}>
            <span>
              <FiAlignCenter size="100%"/>
            </span>
          </NavMenuButtonMenu>
        </NavMenuContainer>
      </Container>
      <Menu />
    </NavMenuWrapper>
  );
}

export default NavMenu;