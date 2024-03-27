import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateNewResume from "./Pages/CreateNewResume";
import FileUploader from "./Pages/FileUploader";
import DummyComponent from "./components/DummyComponent";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/create" element={<CreateNewResume />}></Route>
        <Route path="/importfile" element={<FileUploader />}></Route>
        <Route path="/person" element={<DummyComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
