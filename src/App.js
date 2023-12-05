import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <div className="App">
            <header className="App-header">
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </header>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
