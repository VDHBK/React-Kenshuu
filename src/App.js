import "./App.css";
import AllRouters from "./Modules/AllRouters";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";
import React from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <AllRouters />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
