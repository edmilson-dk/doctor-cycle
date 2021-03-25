import styled from "styled-components"

export const StoryBoxWrapper = styled.article`
  min-width: 280px;
  max-height: 280px;
  border-radius: var(--border-radius);
  background-color: var(--white-primary);
  border-left: 4px solid var(--blue-second);
  padding: var(--space-1);

  box-shadow: 0 0 3px 2px rgba(0,0,0,0.060);
 
  & + & {
    margin-left: var(--space-4);
  }
`;

export const StoryBoxContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StoryBoxText = styled.article`
  margin-top: 7rem;
  margin-bottom: var(--space-1);
  padding: var(--space-1) 0;

  width: 100%;
  
  overflow-y: auto;

  > p {
    font-size: var(--text);
    color: var(--gray);
    text-align: left;
  }
`;

export const StoryBoxFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StoryBoxProfile = styled.div`
  width: auto;
  
  > strong {
    display: block;
    text-align: left;
    font-weight: 600;
    color: var(--dark);
    font-size: var(--title-third);
    margin-bottom: 5px;
  }
  > span {
    text-align: left;
    font-weight: 500;
    color: var(--dark);
    font-size: var(--text);
  }
`;

export const StoryBoxAspas = styled.div`
  width: 6rem;
  height: 6rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StoryBoxAvatar = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  
  position: absolute;
  top: 0;
  left: 0;
`;
