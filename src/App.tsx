import "./App.css";

import { Routes, Route } from "react-router-dom";
import Client from "./components/Client";
import Devis from "./components/Devis";
import Acceuil from "./components/Acceuil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
    </>
  );
}

export default App;
