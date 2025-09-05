import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TradePromo from "./components/TradePromo";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <TradePromo />
      <Hero />
    </main>
  );
}

export default App;
