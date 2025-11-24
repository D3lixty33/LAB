import Hero from "./components/hero-section";
import Navbar from "./components/navbar";
import Presentation from "./components/presentation";
import Collaboration from "./components/collaborations";
import Clients from "./components/clients";
import Player from "./components/player";
import ContactUs from "./components/contsct-us";


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Presentation />
        <Collaboration />
        <Clients />
        <Player />
        <ContactUs />
    </>
  );
}

export default App;
