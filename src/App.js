import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import UploadFiles from "./Components/Uploadfile";
import Faq from "./Components/faq";
import Unauthorized from "./Components/unauth";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/upload/:id" element={<UploadFiles />} />
        <Route path="/upload" element={<Unauthorized />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/unauth" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
