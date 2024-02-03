import React from "react";
import PlayCard from "./PlayCard";
import PlayCard2 from "./PlayCard2";
import ProgressBar from "./ProgressBar";
import {
  BgText,
  EcosystemDiv,
  PlayEarnDiv,
  PlayOverlay,
} from "./playearn.styled";

const PlayEarnPart = () => {
  return (
    <PlayEarnDiv className="bg-[#0049b1] bg-no-repeat">
      <div className="relative">
        <BgText className="text-center">{"Play & Earn"}</BgText>
        <div className="absolute top-0 flex flex-col justify-center w-full h-full items-center">
          <h6 className="text-[#0EC6FF] play-subtitle text-sm font-bold uppercase tracking-wide mt-4 mb-[15px] relative flex items-center px-4">
            Why metasnails ?
          </h6>
          <h2 className="text-white text-[36px] font-black">
            enjoy earnings with Metasnails
          </h2>
        </div>
      </div>
      <div className="relative">
        <PlayOverlay className="absolute top-0 w-full h-full" />
        <div className="m-auto w-[90%] max-w-[1200px] flex justify-center md:justify-between flex-wrap">
          <PlayCard
            icon={"flaticon-pie-chart"}
            title="Flexible and fixed stacking plans"
            text="Stake your MS coin earnings to get More income with flexible and fixed plans throug MS app"
          />
          <PlayCard
            icon={"flaticon-pie-chart-1"}
            title="diffrent modes with diffrent profitability ratio suitable for all gamers and investors"
          />
          <PlayCard
            icon={"flaticon-document"}
            title="NFT Market place"
            text="exchange NFTs with no limitations -"
          />
          <PlayCard
            icon={"flaticon-search-1"}
            title="Airdrops , competitions , giveaways"
            text="MS coins competitions , airdrops , NFT gifts and more"
          />
          <PlayCard
            icon={"flaticon-coding"}
            title="Chart and investor Friendly Tax system"
            text="1% buy tax , and 10% sell taxes goes to manual buy back and marketing"
          />
          <PlayCard
            icon={"flaticon-coding"}
            title="Secure Source code , audit and KYC Team"
            text="secured contract with 0 issues , KYC and transparent team"
          />
        </div>
        <div className="m-auto w-[90%] max-w-[1200px] flex justify-center md:justify-between flex-wrap">
          <PlayCard2
            title="CMC , CGK Fast listing"
            text="Fast listing on CMC CGK 48Hrs afterlaunch"
          />
          <PlayCard2
            title="Locked LP 1 Year vesting from 3rd month"
            text="LP Locked for 1 year with vesting 5% every 3 month starting from the 3rd month"
          />
          <PlayCard2
            title="Beta Testers program"
            text="Become a Beta tester for Metasnail and test all products before they go live , submit reveiws and feedback , get crypto rewards NFTs and more ..."
          />
        </div>
      </div>
      <EcosystemDiv className="max-w-[1200px] w-[95%] m-auto py-[150px] relative">
        <div className="eco-title absolute pt-12">ecosystem</div>
        <div className="grid md:grid-cols-2">
          <div className="eco-text pt-16">
            <h6 className="text-[#0EC6FF] text-sm font-bold uppercase relative flex items-center pl-5 mb-[15px]">
              Tokenomics
            </h6>
            <h2 className="text-[#FF9200] leading-[48px] text-[61px] mb-[20px] font-black break-all">
              Token allocation
            </h2>
            <h1 className="text-white leading-[48px] text-[20px] font-black mb-[20px]">
              1% buy tax goes to gaming pool
            </h1>
            <h1 className="text-white leading-[48px] text-[20px] font-black">
              10 % sell tax goes to buy back and marketing
            </h1>
          </div>
          <div className="md:w-[90%] w-full ml-auto md:mt-0 mt-8">
            <ProgressBar title="Marketing" percent="w-[5%]" label="5%" />
            <ProgressBar title="Team" percent="w-[5%]" label="5%" />
            <ProgressBar title="Gaming Pool" percent="w-[20%]" label="20%" />
            <ProgressBar title="Stacking" percent="w-[5%]" label="5%" />
            <ProgressBar title="Airdrop" percent="w-[5%]" label="5%" />
            <ProgressBar title="Private sale" percent="w-[10%]" label="10%" />
            <ProgressBar title="Presale" percent="w-[50%]" label="50%" />
          </div>
        </div>
      </EcosystemDiv>
    </PlayEarnDiv>
  );
};

export default PlayEarnPart;
