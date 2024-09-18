import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Body from './components/Body'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          {/* <Body/> */}
          <Header />
          <LandingSection />
          <ProjectsSection />
          <SkillsSection/>
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;