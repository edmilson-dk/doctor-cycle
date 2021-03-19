import { useContext, useState } from 'react';
import { FiCheckSquare, FiSearch, FiArrowRight } from 'react-icons/fi';

import { NavMenuContext } from 'src/contexts/NavMenuContext';
import Container from 'src/styles/components/Container';

import {
  MenuWrapper,
  MenuContainer,
  MenuList,
  MenuInputSearch,
  MenuListItem
} from 'src/styles/components/NavMenu/Menu';

function Menu() {
  const [ isActiveLink, setIsActiveLink ] = useState(false);
  const { isOpenMenu } = useContext(NavMenuContext);

  return (
    <MenuWrapper isOpen={isOpenMenu}>
      <Container>
        <MenuContainer>
          <MenuList>
            <ul>
              <MenuInputSearch>
                <input
                type='text' 
                name='search' 
                placeholder='Search services' />
                <button>
                  <span>
                    <FiSearch size='100%' />
                  </span>
                </button>
              </MenuInputSearch>

              <MenuListItem isActive={true}>
                <a href='#home'>Home</a>
                <span>
                  { true
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>

              <MenuListItem isActive={isActiveLink}>
                <a href='#about'>About us</a>
                <span>
                  { isActiveLink 
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>

              <MenuListItem isActive={isActiveLink}>
                <a href='#services'>Services</a>
                <span>
                  { isActiveLink 
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>

              <MenuListItem isActive={isActiveLink}>
                <a href='#doctors'>Doctors</a>
                <span>
                  { isActiveLink 
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>

              <MenuListItem isActive={isActiveLink}>
                <a href='#news'>News</a>
                <span>
                  { isActiveLink 
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>

              <MenuListItem isActive={isActiveLink}>
                <a href='#contact'>Contact</a>
                <span>
                  { isActiveLink 
                      ? <FiCheckSquare size='100%'/>
                      : <FiArrowRight size='100%'/>
                  }
                </span>
              </MenuListItem>
            </ul>
          </MenuList>
        </MenuContainer>
      </Container>
    </MenuWrapper>
  )
}

export default Menu;