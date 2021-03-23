import About from "src/components/About";
import Banner from "src/components/Banner";
import ButtonsActions from "src/components/ButtonsActions";
import Header from "src/components/Header";
import NavMenu from "src/components/NavMenu";
import Services from "src/components/Services";
import { NavMenuContextProvider } from "src/contexts/NavMenuContext";
import { HomeWrapper } from "src/styles/pages/home";

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <NavMenuContextProvider>
        <NavMenu />
      </NavMenuContextProvider>
      <Banner />
      <ButtonsActions />
      <About />
      <Services />
    </HomeWrapper>
  );
}