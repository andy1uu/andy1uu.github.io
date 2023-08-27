import * as React from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./common/NavBar/NavBar";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import HomePage from "./HomePage/HomePage";

const App = () => {
  const buildPage = (page: React.ReactElement) => (
    <div className="Body text-text flex h-screen w-full font-primary">
      <NavBar />
      <div className="PageContainer flex w-full flex-col overflow-auto bg-lightBackground text-darkText">
        <Header />
        {page}
        <Footer />
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={buildPage(<HomePage />)} />
        <Route path="/about" element={buildPage(<HomePage />)} />
        <Route path="/education" element={buildPage(<HomePage />)} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
