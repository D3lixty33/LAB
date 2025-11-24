import Hero from "./components/hero-section";
import Navbar from "./components/navbar";
import Presentation from "./components/presentation";
import Collaboration from "./components/collaborations";
import Clients from "./components/clients";
import Player from "./components/player";


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Presentation />
        <Collaboration />
        <Clients />
        <Player />
    </>
  );
}

export default App;
