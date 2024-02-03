import React, { useEffect, useState } from "react";
import { CountPartDiv, HowToCardDiv, HowToDiv } from "./howto.styled";

import howto1 from "assets/howto/1.png";
import howto2 from "assets/howto/2.png";
import howto3 from "assets/howto/3.png";
import howto4 from "assets/howto/4.png";

import playBtn from "assets/buttons/Play.png";
import mintBtn from "assets/buttons/mint NFT.png";
import buyBtn from "assets/buttons/buy-coin.png";

import arrow from "assets/p-arrow1.png";

const HowToPart = () => {
  const [screen, setscreen] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setscreen(window.innerWidth));
    setscreen(window.innerWidth);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <HowToDiv className="relative">
      <div className="flex sm:justify-around items-center pb-[100px] sm:flex-row flex-col ">
        <CountPart count={1050} title="Burned" />
        <CountPart count={7000} title="holder" />
        <CountPart count={1500} title="NFT solde" />
        <CountPart count={825349} title="Tokens distributed" />
      </div>
      <div className="mb-[100px]">
        <h6 className="text-[#0EC6FF] metasnail-h6 text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
          METASNAIL
        </h6>
        <h2 className="text-white font-black text-[36px]">
          How To start Playing Metasnalis ?
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col bg-[#FFFFFF1C]">
        <div className="howto-card-div grid md:grid-cols-4 sm:grid-cols-2">
          <HowToCard
            arrow={screen > 768 ? true : false}
            no="01"
            bgColor="bg-[#61CE70]"
            img={howto1}
            title="Get MS coin"
            desc="Buy MS coin"
          />
          <HowToCard
            no="02"
            arrow={screen > 768 ? true : false}
            bgColor="bg-[#FF5600]"
            img={howto2}
            title="choose NFT"
            desc="choose NFT pack suitable for you and mint for MS coin Tokens"
          />
          <HowToCard
            arrow={screen > 768 ? true : false}
            no="03"
            bgColor="bg-[#00D7FF]"
            img={howto3}
            title="Connect to the game"
            desc="connect same wallet to metasnail game"
          />
          <HowToCard
            no="04"
            bgColor="bg-[#BECE61]"
            img={howto4}
            title="Play and earn !"
            desc="the snails will appear and start playing auto or manual mode !"
          />
        </div>
        <div className="howto-button-group lg:!w-max p-[15px] lg:block flex justify-between items-center w-full md:flex-row flex-col">
          <img
            src={playBtn}
            alt="play"
            className="lg:min-w-[157px] max-w-[230px] lg:w-[157px] w-full"
          />
          <img
            src={mintBtn}
            alt="mintBtn"
            className="lg:min-w-[157px] max-w-[230px] lg:w-[157px] w-full"
          />
          <img
            src={buyBtn}
            alt="buyBtn"
            className="lg:min-w-[157px] max-w-[230px] lg:w-[157px] w-full"
          />
        </div>
      </div>
    </HowToDiv>
  );
};

export default HowToPart;

export const CountPart = (props: any) => {
  return (
    <CountPartDiv className="sm:max-w-full max-w-[320px] w-[90%]">
      <span className="text-white font-black text-5xl pl-5">{props.count}</span>
      <h6 className="text-[#FF9900] text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
        {props.title}
      </h6>
    </CountPartDiv>
  );
};

export const HowToCard = (props: any) => {
  return (
    <HowToCardDiv className="px-[15px] relative flex justify-center">
      {props.arrow ? (
        <img
          src={arrow}
          className="absolute -right-[20%] -top-3"
          alt={"arrow"}
        />
      ) : null}
      <div className="absolute w-[70px] h-[70px] flex justify-center items-center rounded-full card-no-mark -top-[35px] text-white text-2xl font-black">
        {props.no}
      </div>

      <div
        className={`rounded-[110px] ${props.bgColor} text-center p-[50px] h-max`}
      >
        <img src={props.img} alt="howto1" />
        <h5 className="text-[22px] font-bold my-[15px] text-[#1a1b1e]">
          {props.title}
        </h5>
        <p className="text-[#606060] text-base">{props.desc}</p>
      </div>
    </HowToCardDiv>
  );
};
