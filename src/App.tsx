import React from "react";

import "./App.css";
import MainFirst from "./Components/MainFirst";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import LastPage from "./Components/LastPage";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <MainFirst />
      <SecondPage />
      <ThirdPage />
      <LastPage />
      <Footer />
    </div>
  );
}

export default App;
