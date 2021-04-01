import { FiHeart, FiMessageSquare } from "react-icons/fi";

import {
  NewsBoxWrapper,
  NewsBoxContainer,
  NewsBoxImage,
  NewsBoxContent,
} from "src/styles/components/News/NewsBox";

type NewsBoxProps = {
  image: string;
  createdAt: string;
  author: string;
  description: string;
}

function NewsBox({ image, createdAt, author, description}: NewsBoxProps) {
  return (
    <NewsBoxWrapper>
      <NewsBoxContainer>
        <NewsBoxImage>
          <img src={image} />
        </NewsBoxImage>
        <NewsBoxContent>
          <h3>{createdAt} | {author}</h3>
          <p>{description}</p>
          <div>
            <span>
              <FiHeart size="100%"/>
              100
            </span>
            <span>
              <FiMessageSquare size="100%"/>
              80
            </span>
          </div>
        </NewsBoxContent>
      </NewsBoxContainer>
    </NewsBoxWrapper>
  )
}

export default NewsBox;