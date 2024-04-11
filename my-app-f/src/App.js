import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreateNewResume from "./Pages/CreateNewResume";
import FileUploader from "./Pages/FileUploader";
import Portfolio from "./Pages/Portfolio";
import NotFound from "./Pages/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home/create" element={<CreateNewResume />}></Route>
        <Route path="/home/choosefile" element={<FileUploader />}></Route>
        <Route path="/home/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
