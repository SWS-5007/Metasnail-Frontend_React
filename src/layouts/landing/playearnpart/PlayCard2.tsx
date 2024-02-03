import React from "react";
import { PlayCard2Div } from "./playearn.styled";

const PlayCard2 = (props: any) => {
  return (
    <PlayCard2Div className="relative rounded-2xl py-[47px] max-w-[350px] w-full flex mb-8">
      <div className="bg-black min-w-[60px] h-[60px] flex items-center justify-center rounded-full mr-6">
        <i className={`flaticon-pie-chart text-[#0EC6FF]`} />
      </div>
      <div className="">
        <h5 className="text-white mb-[17px] text-[20px] font-bold">
          {props.title}
        </h5>
        <p className="text-[#C5DDFF]">{props.text}</p>
      </div>
    </PlayCard2Div>
  );
};

export default PlayCard2;
