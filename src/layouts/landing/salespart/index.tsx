import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { SalesPartDiv } from "./sales.styled";

import pricing1 from "assets/pricing/1.png";
import pricing2 from "assets/pricing/2.png";
import pricing3 from "assets/pricing/3.png";

import character from "assets/characters/la cost shadow.png";

const SalesStagePart = () => {
  return (
    <SalesPartDiv className="relative bg-[#0049b1] bg-no-repeat">
      <div className="sale-overlay bg-no-repeat w-full h-full top-0 left-0 absolute" />
      <div className="max-w-[1200px] w-[90%] m-auto relative">
        <div className="sale-card w-full h-full absolute" />
        <div className="relative p-[15px]">
          <div className="pt-2 text-center">
            <h6 className="text-[#0EC6FF] sale-title-h6 text-sm font-bold uppercase relative pl-5 mb-[15px] flex items-center w-max mx-auto">
              GET EARLY !!
            </h6>
            <h2 className="text-white font-black text-[36px] w-max mx-auto">
              Sales stages
            </h2>
            <p className="text-white leading pt-2 leading-8">
              We have experience working with large and small businesses and are
              ready to
              <br />
              {
                "develop a targeted strategy and plan that’s just right for you."
              }
            </p>
          </div>
          <div className="flex mb-4 pt-2 md:flex-row flex-col">
            <div className="md:w-[50%] flex justify-around">
              <div>
                <span className="text-white text-center leading-10 text-[35px] font-black">
                  93
                </span>
                <p className="text-white m-0 text-center text-[15px]">Days</p>
              </div>
              <span className="text-[35px] text-[#00c3ff] -mt-2">:</span>
              <div>
                <span className="text-white text-center leading-10 text-[35px] font-black">
                  59
                </span>
                <p className="text-white m-0 text-center text-[15px]">Hour</p>
              </div>
              <span className="text-[35px] text-[#00c3ff] -mt-2">:</span>
              <div>
                <span className="text-white text-center leading-10 text-[35px] font-black">
                  50
                </span>
                <p className="text-white m-0 text-center text-[15px]">
                  Minutes
                </p>
              </div>
              <span className="text-[35px] text-[#00c3ff] -mt-2">:</span>
              <div>
                <span className="text-white text-center leading-10 text-[35px] font-black">
                  09
                </span>
                <p className="text-white m-0 text-center text-[15px]">
                  Seconds
                </p>
              </div>
            </div>
            <div className="text-center md:w-[50%] px-[15px] text-white font-black text-4xl">
              For NFT presale and private sale to start !
            </div>
          </div>
          <div className="flex sale-card-group md:flex-row flex-col">
            <div className="w-[-webkit-fill-available] mb-[15px] mx-[15px] relative">
              <div className="sale-card-1 relative flex flex-col items-center rounded-[15px] bg-[#FF4B38] px-[30px] pt-[56px]">
                <span className="card-marker absolute bg-white text-[#FE4C1C] top-[30px] text-[13px] uppercase left-0 py-2 px-3 rounded-r-[17px] font-bold">
                  Private sale starts soon !
                </span>
                <img
                  src={pricing1}
                  alt="pricing1"
                  className="m-auto h-[100px] mb-5"
                />
                <h2 className="text-white font-bold text-[42px] mb-[3px] text-center">
                  <sup>BNB</sup> 0.0001
                </h2>
                <p className="text-center text-white font-medium text-base">
                  Sale ends on 10/10/2001
                </p>
                <div className="text-center text-white mt-[35px] pt-[28px] pb-[30px] border-t border-[#ffffff55]">
                  <p>1.5X higher that launch price</p>
                  <p>3.100 Keywords</p>
                  <p>One Way Link Building</p>
                  <p>10 Free Optimization</p>
                  <p>5 Press Releases</p>
                </div>
              </div>
              <div className="-mt-[25px]">
                <div className="anim-btn m-auto bg-white h-fit text-[#FE4C1C] rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-white cursor-pointer w-max">
                  <span className="px-3">Buy Private sale</span>
                  <div className="p-[12px] bg-[#FE4C1C] text-white rounded-full">
                    <HiArrowNarrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[-webkit-fill-available] mb-[15px] mx-[15px] relative">
              <div className="sale-card-2 flex flex-col items-center relative  rounded-[15px] px-[30px] pt-[56px]">
                <span className="card-marker absolute bg-[#00c3ff] text-white top-[30px] text-[13px] uppercase left-0 py-2 px-3 rounded-r-[17px] font-bold">
                  NFT PRESALE STARTS SOON !
                </span>
                <img
                  src={pricing2}
                  alt="pricing2"
                  className="m-auto h-[100px] mb-5"
                />
                <h2 className="text-white font-bold text-[42px] mb-[3px] text-center">
                  <sup>$</sup> 69.99
                </h2>
                <p className="text-center text-white font-medium text-base">
                  Monthly Package
                </p>
                <div className="text-center text-white mt-[35px] pt-[28px] pb-[30px] border-t border-[#ffffff55]">
                  <p>Social Media Marketing</p>
                  <p>2.100 Keywords</p>
                  <p>One Way Link Building</p>
                  <p>5 Free Optimization</p>
                  <p>3 Press Releases</p>
                </div>
              </div>
              <div className="-mt-[25px]">
                <div className="anim-btn m-auto bg-[#00c3ff] h-fit text-white rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#00c3ff] cursor-pointer w-max">
                  <span className="px-3">Buy Private</span>
                  <div className="p-[12px] bg-white text-[#00c3ff] rounded-full">
                    <HiArrowNarrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[-webkit-fill-available] mb-[15px] mx-[15px] relative">
              <div className="sale-card-3 flex flex-col items-center relative  rounded-[15px] px-[30px] pt-[56px]">
                <span className="card-marker absolute bg-[#0160e7] text-white top-[30px] text-[13px] uppercase left-0 py-2 px-3 rounded-r-[17px] font-bold">
                  Monthly Package
                </span>
                <img
                  src={pricing3}
                  alt="pricing3"
                  className="m-auto h-[100px] mb-5"
                />
                <h2 className="text-white font-bold text-[42px] mb-[3px] text-center">
                  <sup>$</sup> 89.99
                </h2>
                <p className="text-center text-white font-medium text-base">
                  Monthly Package
                </p>
                <div className="text-center text-white mt-[35px] pt-[28px] pb-[30px] border-t border-[#ffffff55]">
                  <p>Social Media Marketing</p>
                  <p>5.100 Keywords</p>
                  <p>One Way Link Building</p>
                  <p>15 Free Optimization</p>
                  <p>10 Press Releases</p>
                </div>
              </div>
              <div className="-mt-[25px]">
                <div className="anim-btn m-auto bg-[#00c3ff] h-fit text-white rounded-full text-base relative font-bold flex items-center p-[5px] border-x border-[#00c3ff] cursor-pointer w-max">
                  <span className="px-3">Choose Plane</span>
                  <div className="p-[12px] bg-white text-[#00c3ff] rounded-full">
                    <HiArrowNarrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-[165px] pt-[100px] flex justify-between md:flex-row flex-col items-center">
          <div>
            <img src={character} alt="character" />
          </div>
          <div className="max-w-[485px] w-[95%]">
            <div className="">
              <h6 className="text-[#0EC6FF] sale-title-h6 text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
                WORK WITH METASNAILS TEAM !
              </h6>
              <h2 className="text-white font-black text-[36px]">
                Become a Beta tester and test Metasnails Products !
              </h2>
              <p className="pb-[30px] text-white text-[20px] leading-9 pt-2">
                {
                  "“After cycling through multiple SEO companies and seeing no results, I finally came across SEO. Choosing to work with Onum is hands down one of the best business investment decisions I have ever made.”"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </SalesPartDiv>
  );
};

export default SalesStagePart;
