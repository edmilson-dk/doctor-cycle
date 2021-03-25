import {
  StoryBoxWrapper,
  StoryBoxContainer,
  StoryBoxText,
  StoryBoxFooter,
  StoryBoxProfile,
  StoryBoxAspas,
  StoryBoxAvatar,
} from "src/styles/components/Story/StoryBox";

type StoryBoxProps = {
  username: string;
  description: string;
  avatar: string;
}

function StoryBox({ username, description, avatar }: StoryBoxProps) {
  return (
    <StoryBoxWrapper>
      <StoryBoxContainer>
        <StoryBoxText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </p>
        </StoryBoxText>
        <StoryBoxFooter>
          <StoryBoxProfile>
            <strong>{ username }</strong>
            <span>{ description }</span>
          </StoryBoxProfile>
          <StoryBoxAspas>
            <img src="assets/icons/aspas.svg" />
          </StoryBoxAspas>
        </StoryBoxFooter>
        <StoryBoxAvatar>
          <img src={avatar} alt="User profile" />
        </StoryBoxAvatar>
      </StoryBoxContainer>
    </StoryBoxWrapper>
  )
}

export default StoryBox;