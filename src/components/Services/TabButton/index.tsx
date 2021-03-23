import { CSSProperties, MutableRefObject } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { TabButtonWrapper } from 'src/styles/components/Services/TabButton';

type TabButtonProps = {
  icon?: string;
  style?: CSSProperties;
  isLastButton?: boolean;
  onClick: () => void;
}

function TabButton({ icon, onClick, style, isLastButton }: TabButtonProps) {
  return (
    <TabButtonWrapper style={style} isLastButton={isLastButton} onClick={onClick}>
      <span>
        { isLastButton 
          ? <FiPlusSquare size="100%"/>
          : <img src={icon} /> }
      </span>
    </TabButtonWrapper>
  )
}

export default TabButton;