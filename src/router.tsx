import React from "react";
import MyLibrary from "./Pages/MyLibrary/index";
import BookDetail from "./Pages/BookDetails/index";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntrepreneurPage from "./Pages/Entrepreneur";

function RoutePath() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyLibrary />}/>
        <Route path="/book-details" element={<BookDetail />}/>
        <Route path="/entrepreneur" element={<EntrepreneurPage />}/>
      </Routes>
    </Router>
  );
}

export default RoutePath;
