import { Head } from "next/document";
import About from "src/components/About";
import AppointmentForm from "src/components/AppointmentForm";
import Banner from "src/components/Banner";
import ButtonsActions from "src/components/ButtonsActions";
import Doctors from "src/components/Doctors";
import Header from "src/components/Header";
import NavMenu from "src/components/NavMenu";
import Services from "src/components/Services";
import Story from "src/components/Story";
import { NavMenuContextProvider } from "src/contexts/NavMenuContext";
import { HomeWrapper } from "src/styles/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor Cycle</title>
      </Head>
      <HomeWrapper>
        <Header />
        <NavMenuContextProvider>
          <NavMenu />
        </NavMenuContextProvider>
        <Banner />
        <ButtonsActions />
        <About />
        <Services />
        <Story />
        <AppointmentForm />
        <Doctors />
      </HomeWrapper>
    </>
  );
}