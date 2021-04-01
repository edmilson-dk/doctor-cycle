import { FiFacebook, FiInstagram, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi";
import Container from "src/styles/components/Container";

import {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  FooterContent,
  FooterNewsletter,
  FooterCopyright,
} from "src/styles/components/Footer";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterLogo>
            <img src="assets/icons/logo.svg" />
          </FooterLogo>
          <FooterContent>
            <div>
              <p>Leading the way in Medical Excellence, Trusted care.</p>
              <h3>Cotact us</h3>
              <p>Email: doctors@gmail.com</p>
              <p>Call: 0800-999-000</p>
              <p>Adress: New work Av.190</p>
            </div>
            <div>
              <h3>Important Link</h3>
              <p>Appointment</p>
              <p>Doctors</p>
              <p>Services</p>
              <p>About us</p>
            </div>
          </FooterContent>
          <FooterNewsletter>
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Enter our email"/>
              <button>
                <span>
                  <FiSend size="100%"/>
                </span>
              </button>
            </div>
          </FooterNewsletter>
          <FooterCopyright>
            <p>© Doctor Cycle. All rights reserved</p>
            <div>
              <span>
                <FiTwitter size="100%"/>
              </span>
              <span>
                <FiInstagram size="100%"/>
              </span>
              <span>
                <FiLinkedin size="100%"/>
              </span>
              <span>
                <FiFacebook size="100%"/>
              </span>
            </div>
          </FooterCopyright>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  )
}

export default Footer;