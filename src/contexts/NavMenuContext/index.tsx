import { createContext, ReactNode, useState } from 'react';

type NavMenuContextValues = {
  isOpenMenu: boolean;
  setOpenMenu: () => void;
}

type NavMenuContextProviderProps = {
  children: ReactNode;
}

export const NavMenuContext = createContext<NavMenuContextValues>(null);

export function NavMenuContextProvider({ children }: NavMenuContextProviderProps ) {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  function setOpenMenu() {
    const body = document.querySelector('body');
    body.style.overflow = !isOpenMenu ? 'hidden' : 'scroll';
    
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <NavMenuContext.Provider value={{isOpenMenu, setOpenMenu}}>
      { children }
    </NavMenuContext.Provider>
  )
}