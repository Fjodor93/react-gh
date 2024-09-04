import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartContent from "./pages/StartContent";
import React from "react";
import Products from "./pages/Products";
import Solarium from "./pages/Solarium";
import Tanbed from "./pages/Tanbeds";
import Contacts from "./Contacts";
import AboutUs from "./pages/AboutUs";
import './Style/App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/react-gh/" element={<Layout/>}>
          <Route index element={<StartContent/>} />
          <Route path="/react-gh/solarium" element={<Solarium/>} />
          <Route path="/react-gh/produkter" element={<Products/>} />
          <Route path="/react-gh/kontakt" element={<Contacts />} />
          <Route path="/react-gh/solarium/baddar/*" element={<Tanbed />} />
          <Route path="/react-gh/contacts" element={<AboutUs />} />
        </Route>
        </Routes>
      </BrowserRouter>
  ); 
}
export default App;
