import { ReactNode } from "react";

import { 
  TabStructureWrapper, 
  TabStructureButtonsContainer, 
  TabStructureContent,
} from "src/styles/components/Services/TabStructure";

type TabStructureProps = {
  tabButtons: Array<ReactNode>;
  children: ReactNode;
}

function TabStructure({ tabButtons, children }: TabStructureProps) {
  return (
    <TabStructureWrapper>
      <TabStructureButtonsContainer>
        { tabButtons }
      </TabStructureButtonsContainer>
      <TabStructureContent>
        { children }
      </TabStructureContent>
    </TabStructureWrapper>
  )
}

export default TabStructure;