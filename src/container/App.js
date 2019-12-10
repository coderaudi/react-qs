import React from "react";
import "./App.css";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

import MainApp from "../routers/index";

function App() {
  return (
    <div>
      <Header />
       <MainApp />
      <Footer />
    </div>
  );
}

export default App;
