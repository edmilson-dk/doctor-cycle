import Container from "src/styles/components/Container";

import {
  HeaderWrapper,
  HeaderLogo,
 } from 'src/styles/pages/home';
 
function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderLogo>
          <img src="assets/icons/logo.svg" />
        </HeaderLogo>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;