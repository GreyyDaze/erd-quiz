import "./App.css";
import Auctions from "./components/Auctions";
import { Discover } from "./components/Discover";
import Footer from "./components/Footer";
import AppNavbar from "./components/Navbar";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div>
      <AppNavbar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
