import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainFirst from "./Components/MainFirst";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";
import QuestionPage from "./Components/QuestionPage";
import LastPage from "./Components/LastPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainFirst />
              <SecondPage />
              <ThirdPage />
              <FourthPage />
              <LastPage />
              <Footer />
            </>
          }
        />

        <Route path="/QuestionPage" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
{
  /* <Route path="/MainFirst" element={<MainFirst />} />

          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          <Route path="/FourthPage" element={<FourthPage />} />
          <Route path="/LastPage" element={<LastPage />} />
          <Route path="/Footer" element={<Footer />} />
        */
}
