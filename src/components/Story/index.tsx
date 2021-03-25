import StoryBox from "./StoryBox";

import Container from "src/styles/components/Container";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";

import {
  StoryWrapper,
  StoryContainer,
  StoryContent,
} from "src/styles/components/Story";

function Story() {
  return (
    <StoryWrapper>
      <Container>
        <StoryContainer>
          <SubTitle>See what our customers have to say</SubTitle>
          <Title>Our success story</Title>

          <StoryContent>
            <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-1.svg"
            />
            <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-2.svg"
            />
            <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-3.svg"
            />
             <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-3.svg"
            />
             <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-3.svg"
            />
             <StoryBox 
              username="Laura Bertrani"
              description="lawyer"
              avatar="assets/images/story/story-image-3.svg"
            />
          </StoryContent>
        </StoryContainer>
      </Container>
    </StoryWrapper>
  )
}

export default Story;