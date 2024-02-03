import React from "react";
import { MeetPartDiv } from "./meet.styled";

import mintBtn from "assets/buttons/mint NFT.png";
import exploreBtn from "assets/buttons/explore.png";
import lebraniya from "assets/characters/lebraniya.png";
const MeetTheHeroPart = () => {
  return (
    <MeetPartDiv className="px-[15px] bg-[#0049B1]">
      <div>
        <div className="max-w-[1300px] m-auto grid md:grid-cols-2">
          <div className="px-[15px] py-[60px]">
            <h6 className="text-[#0EC6FF] text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
              NFT
            </h6>
            <h2 className="text-white leading-[48px] text-[36px] mb-[20px] font-black">
              Meet The Heros !
            </h2>
            <h1 className="text-[#C5DDFF] leading-[36px] text-[22px] mb-[20px]">
              13 Hero hand made by our NFT artists ! each snail has its own
              unique power and fighting skills !
            </h1>
            <h1 className="text-[#C5DDFF] leading-[36px] text-[22px]">
              only 100K NFT in total supply that will be ever minted !!
            </h1>
            <div className="flex justify-between mt-20">
              <img src={mintBtn} alt="mint" className="w-[49%] meet-btn" />
              <img
                src={exploreBtn}
                alt="explore"
                className="w-[49%] meet-btn"
              />
            </div>
          </div>
          <div className="px-[15px] text-right">
            <img
              src={lebraniya}
              alt="lebraniya"
              className="md:ml-auto md:mr-0 mx-auto lebraniya"
            />
          </div>
        </div>
      </div>
    </MeetPartDiv>
  );
};

export default MeetTheHeroPart;
