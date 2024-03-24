import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import NewNote from "./pages/newNote";
import Notes from "./pages/notes";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/new-note" element={<NewNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
