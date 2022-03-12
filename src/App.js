import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Departements from './Departements';
import Accueil from './Accueil';
import Presentation from './Presentation';
import Structures from "./Structures";
import Footer from "./Footer";


import Contact from "./Contact";
import Evenements from "./Evenements";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Accueil/>} />
        <Route path="/presentation" element={<Presentation/>} />
        <Route path="/structures" element ={<Structures/>} />
        <Route path="/departements" element={<Departements/>} />

        <Route path="/evenements" element={<Evenements/>} />
        <Route path="/contact" element={<Contact/>} />
        
        
      </Routes>
        
      <Footer/>
    </Router>
  );
}

export default App;
