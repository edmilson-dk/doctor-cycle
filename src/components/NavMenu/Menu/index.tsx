import { FiCheckSquare, FiSearch } from "react-icons/fi";

import Container from "src/styles/components/Container";

import {
  MenuWrapper,
  MenuContainer,
  MenuList,
  MenuInputSearch,
  MenuListItem,
  MenuShadow
} from "src/styles/components/NavMenu/Menu";

function Menu() {
  return (
    <MenuWrapper>
      <Container>
        <MenuContainer>
          <MenuList>
            <MenuInputSearch>
              <input
               type="text" 
               name="search" 
               placeholder="Search services" />
               <button>
                 <span>
                   <FiSearch size="100%" />
                 </span>
               </button>
            </MenuInputSearch>

            <MenuListItem isActive={true}>
              <a href="#home">Home</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>

            <MenuListItem isActive={false}>
              <a href="#about">About us</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>

            <MenuListItem isActive={false}>
              <a href="#services">Services</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>

            <MenuListItem isActive={true}>
              <a href="#doctors">Doctors</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>

            <MenuListItem isActive={false}>
              <a href="#news">News</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>

            <MenuListItem isActive={false}>
              <a href="#contact">Contact</a>
              <span>
               <FiCheckSquare size="100%"/> 
              </span>
            </MenuListItem>
          </MenuList>

          <MenuShadow />
        </MenuContainer>
      </Container>
    </MenuWrapper>
  )
}