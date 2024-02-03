import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaPlay,
  FaWindows,
  FaApple,
  FaAndroid,
  FaInternetExplorer,
} from "react-icons/fa";

import {
  ApplicationGrid,
  BtnGetMyDiscount,
  BtnHowItworks,
  IntroCard,
  IntroCardOverlay,
  IntroImg,
  IntroOverlay,
  IntroPartSection,
  IntroText,
} from "./intropart.styled";

import IntroCharacter from "assets/characters/intro_1.png";
import CardBtn1 from "assets/buttons/coinmarketcap-kiradoge.png";
import CardBtn2 from "assets/buttons/coingecko.png";
import ChartBtn from "assets/buttons/chart.png";
import PlayBtn from "assets/buttons/Play.png";
import BuyBtn from "assets/buttons/buy-coin.png";
import MintBtn from "assets/buttons/mint NFT.png";

const IntroPart = () => {
  useEffect(() => {
    const animationMove: any = document.querySelector("#intro-character");
    const handleAnimation = (e: any) => {
      let halfWidth = window.innerWidth / 2;
      let halfHeight = window.innerHeight / 2;
      let x = e.clientX - halfWidth;
      let y = e.clientY - halfHeight;

      animationMove.style.transform = `translate(${
        1 * y * ((1 / halfHeight) * 6)
      }px, ${1 * x * ((2 / halfWidth) * 6)}px) rotateX(${
        1 * y * ((1 / halfHeight) * 6)
      }deg) rotateY(${1 * x * ((2 / halfWidth) * 6)}deg)`;
    };
    window.addEventListener("mousemove", handleAnimation);
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <IntroPartSection className="lg:pt-[265px] pt-[150px] pb-[175px] relative bg-center bg-no-repeat bg-cover">
      <IntroOverlay className="absolute w-full h-full top-0 bg-center bg-no-repeat bg-cover bg-fixed" />
      <div className="grid lg:grid-cols-2 w-[90%] m-auto">
        <div>
          <div id="intro-character">
            <IntroImg
              src={IntroCharacter}
              alt="intro character"
              className="opacity-90 max-w-[515px] w-full hover:opacity-100 m-auto lg:ml-0"
            />
          </div>
          <IntroText className="w-[60%] m-auto">
            <h6 className="text-xs font-bold relative pl-5 pb-3">
              METAS /NAIL CONTRACT ADDRESS :
            </h6>
            <h2 className="text-white text-base font-black relative mb-4 break-all">
              0x00e1656e45f18ec6747f5a8496fd39b50b38396d
            </h2>
            <div className="relative flex sm:flex-row flex-col justify-between">
              <img
                src={ChartBtn}
                className="sm:w-[47%] w-full"
                alt="ChartBtn"
              />
              <img src={PlayBtn} className="sm:w-[47%] w-full" alt="PlayBtn" />
            </div>
            <div className="relative flex sm:flex-row flex-col justify-between">
              <img src={BuyBtn} className="sm:w-[47%] w-full" alt="ChartBtn" />
              <img src={MintBtn} className="sm:w-[47%] w-full" alt="PlayBtn" />
            </div>
          </IntroText>
        </div>
        <div>
          <IntroCard className="md:px-24  sm:px-16 px-10 py-14 w-fit relative mx-auto mt-16 lg:ml-0 lg:mt-0">
            <IntroCardOverlay className="absolute top-0 left-0 w-full h-full -z-[1] mix-blend-darken" />
            <h6 className="text-white uppercase font-bold">Metasnails !</h6>
            <h2 className="text-[#E17B00] text-[40px] font-black break-all">
              New Generation OF P2E !
            </h2>
            <p className="text-white text-[22px] pt-20 pb-5 break-all">
              Get MS coin 1.5X cheaper than launch price !
            </p>
            <p className="text-white text-[22px] pb-20 break-all">
              and mint your Heros NFTs before launch !!
            </p>
            <div className="flex items-center sm:flex-row flex-col">
              <BtnGetMyDiscount className="anim-btn bg-[#fe4c1c] h-fit text-white uppercase rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#fe4c1c] cursor-pointer">
                <span className="px-4">GET MY DISCOUNT</span>
                <div className="p-3 bg-white text-[#fe4c1c] rounded-full">
                  <HiArrowNarrowRight />
                </div>
              </BtnGetMyDiscount>
              <div className="flex items-center">
                <BtnHowItworks className="border-[10px] cursor-pointer rounded-full border-[#ffffff1a]">
                  <div className="bg-white hover:bg-[#00c3ff] rounded-full p-4 text-[#00c3ff] hover:text-white">
                    <FaPlay />
                  </div>
                </BtnHowItworks>
                <p className="pl-3 text-[#A2893A] text-base font-bold leading-7">
                  How It
                  <br />
                  Works
                </p>
              </div>
            </div>
            <ApplicationGrid className="flex sm:text-[40px] text-3xl pt-10 items-center">
              <div className="text-white hover:text-[#00A9FF]">
                <FaWindows />
              </div>
              <div className="text-white hover:text-[#CFCFCF]">
                <FaApple />
              </div>
              <div className="text-[#00C526] hover:text-[#60FF6A]">
                <FaAndroid />
              </div>
              <div className="text-[#3BD6FF] hover:text-[#00AFFF]">
                <FaInternetExplorer />
              </div>
            </ApplicationGrid>
            <div className="flex justify-between items-center sm:items-start sm:flex-row flex-col pt-20 pb-[70px]">
              <div className="sm:w-[45%]">
                <img
                  src={CardBtn1}
                  alt="cardbutton1"
                  className="rounded-full"
                />
                <p className="text-white font-black text-center pt-1">
                  Super Fast listing !
                </p>
              </div>
              <div className="sm:w-[45%] sm:mt-0 mt-8">
                <img
                  src={CardBtn2}
                  alt="cardbutton2"
                  className="rounded-full"
                />
              </div>
            </div>
          </IntroCard>
        </div>
      </div>
    </IntroPartSection>
  );
};

export default IntroPart;
