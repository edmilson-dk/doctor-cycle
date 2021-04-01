import Head from "next/head";
import About from "src/components/About";
import AppointmentForm from "src/components/AppointmentForm";
import Banner from "src/components/Banner";
import ButtonsActions from "src/components/ButtonsActions";
import Contact from "src/components/Contact";
import Doctors from "src/components/Doctors";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import NavMenu from "src/components/NavMenu";
import News from "src/components/News";
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
        <News />
        <Contact />
        <Footer />
      </HomeWrapper>
    </>
  );
}