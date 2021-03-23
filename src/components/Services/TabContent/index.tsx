import { FiCheckSquare } from "react-icons/fi";

type TabContentProps = {
  text: string;
  title: string;
  list: Array<string>;
  images: Array<string>
}

import {
  TabContentWrapper,
  TabContentTitle,
  TabContentList,
  TabContentText,
  TabContentImages,
} from "src/styles/components/Services/TabContent";

function TabContent({ text, title, list, images }: TabContentProps) {
  return (
    <TabContentWrapper>
      <TabContentTitle>{ title }</TabContentTitle>
      <TabContentList>
        {
          list.map((item, index) => (
            <li key={index}>
              <strong>{ item }</strong>
              <span>
                <FiCheckSquare size="100%"/>
              </span>
            </li>
          ))
        }
      </TabContentList>
      <TabContentText>{ text }</TabContentText>
      <TabContentImages>
        {
          images.map((image, index) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))
        }
      </TabContentImages>
    </TabContentWrapper>
  )
}

export default TabContent;