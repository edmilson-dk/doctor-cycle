import Header from "src/components/Header";
import NavMenu from "src/components/NavMenu";
import { NavMenuContextProvider } from "src/contexts/NavMenuContext";

export default function Home() {
  return (
    <>
      <Header />
      <NavMenuContextProvider>
        <NavMenu />
      </NavMenuContextProvider>
    </>
  );
}