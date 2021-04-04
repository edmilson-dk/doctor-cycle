import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 780px) {
    max-width: 720px;
  }

  @media screen and (min-width: 980px) {
    max-width: 940px;
  }

  @media screen and (min-width: 1124px) {
    max-width: 1100px;
  }
`;

export default Container;