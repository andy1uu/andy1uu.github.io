import * as React from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./common/NavBar/NavBar";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";

const App = () => {
  const buildPage = (page: React.ReactElement) => (
    <div className="Body text-text flex h-screen w-full font-primary">
      <NavBar />
      <div className="PageContainer flex w-full flex-col overflow-auto bg-darkBackground text-lightText">
        <Header />
        {page}
        <Footer />
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={buildPage(<Home />)} />
        <Route path="/home" element={buildPage(<Home />)} />
        <Route path="/about" element={buildPage(<About />)} />
        <Route path="/education" element={buildPage(<Education />)} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
