import AboutUs from "./AboutUs";
import "./App.css";
import Bottom from "./components/bottom/Bottom";

import Nav from "./components/nav/Nav";
import TopNav from "./components/topNav/TopNav";
import Customers from "./Customers";
import Home from "./Home";
import Process from "./Process";
import Suppliers from "./Suppliers";
import {  Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <TopNav />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/process" element={<Process />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="customers" element={<Customers />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Bottom />
    </div>
  );
};

export default App;
