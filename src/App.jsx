import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Query from "./pages/Query";
import LanguageDetail from "./pages/LanguageDetail.jsx";
import HTMLDetails from "./language/HTMLDetails.jsx";
import CSSDetails from "./language/CSSDetails.jsx";
import JavascriptDetails from "./language/JavascriptDetails.jsx";
import PythonDetails from "./language/PythonDetails.jsx";
import JavaDetails from "./language/JavaDetails.jsx";
import TypescriptDetails from "./language/TypescriptDetails.jsx";
import CppDetails from "./language/CppDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  GoDetails from "./language/GoDetails.jsx";
import KotlinDetails from "./language/KotlinDetails.jsx";
import SwiftDetails from "./language/SwiftDetails.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar onSearchChange={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/query" element={<Query />} />
        <Route path="/language/:name" element={<LanguageDetail />} />
        <Route path="/language/html" element={<HTMLDetails />} />
        <Route path="/language/css" element={<CSSDetails />} />
        <Route path="/language/javascript" element={<JavascriptDetails />} />
        <Route path="/language/python" element={<PythonDetails />} />
        <Route path="/language/java" element={<JavaDetails />} />
        <Route path="/language/typescript" element={<TypescriptDetails />} />
        <Route path="/language/cpp" element={<CppDetails />} />
        <Route path="/language/go" element={<GoDetails />} />
        <Route path="/language/kotlin" element={<KotlinDetails />} />
        <Route path="/language/swift" element={<SwiftDetails />} />
        

        
      </Routes>
      <Footer />
    </Router>
  );
}
