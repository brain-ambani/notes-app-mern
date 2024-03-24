import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <main className="max-h-screen"></main>
      <Footer />
    </div>
  );
}

export default App;
