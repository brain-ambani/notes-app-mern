import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import NewNote from "./pages/newNote";
import Notes from "./pages/notes";
import { Footer } from "./components/Footer";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-note" element={<NewNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
