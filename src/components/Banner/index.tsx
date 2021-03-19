import { FiArrowRight } from "react-icons/fi";

import Container from "src/styles/components/Container";

import {
  BannerWrapper,
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerButton,
} from 'src/styles/components/Banner';

function Banner() {
  return (
    <BannerWrapper>
      <Container>
        <BannerContainer>
          <BannerContent>
            <BannerTitle>
              <h3>Caring for life</h3>
              <h1>Leading the Way in Medical Excellence</h1>
            </BannerTitle>
            <BannerButton>
              <strong>Our services</strong>
              <span>
                <FiArrowRight size="100%"/>
              </span>
            </BannerButton>
          </BannerContent>
        </BannerContainer>
      </Container>
    </BannerWrapper>
  )
}

export default Banner;