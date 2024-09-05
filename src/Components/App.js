import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartContent from "../pages/StartContent";
import React from "react";
import Products from "../pages/Products";
import Solarium from "../pages/Solarium";
import Tanbed from "../pages/Tanbeds";
import Contacts from "./Contacts";
import AboutUs from "../pages/AboutUs";
import '../Style/App.css';

function App() {
  return (
      <BrowserRouter basename="/react-gh">
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<StartContent/>} />
          <Route path="/solarium" element={<Solarium/>} />
          <Route path="/produkter" element={<Products/>} />
          <Route path="/kontakt" element={<Contacts />} />
          <Route path="/solarium/baddar/*" element={<Tanbed />} />
          <Route path="/contacts" element={<AboutUs />} />
        </Route>
        </Routes>
      </BrowserRouter>
  ); 
}
export default App;
