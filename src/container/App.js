import React from "react";
import "./App.css";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Slider from "../components/Sliders/homeslider";

import Toasts from "../components/Toasts/toasts";
import Dropdown from "../components/Dropdown/dropdown";
import ArticleForm from "../routers/Articles/addArticle";
import DisplayArticles from "../routers/Articles/displayArticle";
function App() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
