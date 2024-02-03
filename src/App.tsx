// Import Modules
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Pages
import LandingPage from "pages/landing/LandingPage";

// Import css
import "swiper/css";
import "swiper/css/pagination";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";
import SocialButtonsGroup from "components/socialbuttongroup";
import ScrollTop from "components/scrolltop";

import logo from "assets/buttons/Metasnails text shadow.png";
import buyBtn from "assets/buttons/Buy.png";
import { MyMark } from "components/MyMark";

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setLoading(true);
    let count1 = 0;
    let i = setInterval(function () {
      setCount((prev) => prev + 1);
      count1++;
      if (count1 === 101) {
        clearInterval(i);
        setCount(0);
        setLoading(false);
      }
    }, 30);
  }, []);
  return (
    <>
      {!loading ? (
        <Router>
          <SocialButtonsGroup />
          <ScrollTop />
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Footer />
          <img
            src={buyBtn}
            alt="button"
            className="fixed -bottom-[60px] bottom-btn max-w-[300px] z-10"
          />
        </Router>
      ) : (
        <div className="bg-[#e6d4c1] w-full h-screen flex flex-col justify-center items-center">
          <div className="relative max-w-[300px]">
            <img src={logo} alt="logo" className="max-w-[300px] w-full" />
          </div>
          <span className="font-medium text-[20px] mt-8" id="loader-count">
            {count} %
          </span>
        </div>
      )}
      <MyMark />
    </>
  );
}

export default App;
