import { FiPhoneCall, FiMapPin, FiClock } from 'react-icons/fi';

import Container from "src/styles/components/Container";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuItemIcon,
  HeaderMenuItemContent
 } from 'src/styles/components/Header';
 
function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <HeaderLogo>
            <img src="assets/icons/logo.svg" />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderMenuItem>
              <HeaderMenuItemIcon>
                <FiPhoneCall size="100%" />
              </HeaderMenuItemIcon>
              <HeaderMenuItemContent>
                <strong>Emergency</strong>
                <p>0800-999-000</p>
              </HeaderMenuItemContent>
            </HeaderMenuItem>

            <HeaderMenuItem>
              <HeaderMenuItemIcon>
                <FiClock size="100%" />
              </HeaderMenuItemIcon>
              <HeaderMenuItemContent>
                <strong>Working Time</strong>
                <p>09:00-20:00 every day</p>
              </HeaderMenuItemContent>
            </HeaderMenuItem>

            <HeaderMenuItem>
              <HeaderMenuItemIcon>
                <FiMapPin size="100%" />
              </HeaderMenuItemIcon>
              <HeaderMenuItemContent>
                <strong>Location</strong>
                <p>New Work Av190</p>
              </HeaderMenuItemContent>
            </HeaderMenuItem>
          </HeaderMenu>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;