import Container from "src/styles/components/Container";
import { SubTitle, Title } from "src/styles/components/TitleAndSubTitle";
import NewsBox from './NewsBox';

import {
  NewsWrapper,
  NewsContainer,
  NewsContent,
} from "src/styles/components/News";

function News() {
  return (
    <NewsWrapper>
      <Container>
        <NewsContainer>
          <SubTitle>Better information,Better health</SubTitle>
          <Title>News</Title>

          <NewsContent>
            <NewsBox 
              image="assets/images/doctors-news/doctor-news-1.jpeg"
              createdAt="February 02, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <NewsBox 
              image="assets/images/doctors-news/doctor-news-2.jpg"
              createdAt="February 04, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <NewsBox 
              image="assets/images/doctors-news/doctor-news-1.jpeg"
              createdAt="February 02, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
             <NewsBox 
              image="assets/images/doctors-news/doctor-news-1.jpeg"
              createdAt="February 02, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <NewsBox 
              image="assets/images/doctors-news/doctor-news-2.jpg"
              createdAt="February 04, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <NewsBox 
              image="assets/images/doctors-news/doctor-news-1.jpeg"
              createdAt="February 02, 2017"
              author="By Willy Goves"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </NewsContent>
        </NewsContainer>
      </Container>
    </NewsWrapper>
  )
}

export default News;