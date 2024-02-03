import React from "react";
import { PlayCardDiv } from "./playearn.styled";

const PlayCard = (props: any) => {
  return (
    <PlayCardDiv className="relative rounded-2xl p-[47px] max-w-[350px] w-full flex flex-col items-center mb-8">
      <i className={`${props.icon} text-[#0EC6FF] mb-6`} />
      <h5 className="text-white mb-[14px] text-[22px] font-bold text-center">
        {props.title}
      </h5>
      <p className="text-[#C5DDFF] text-center">{props.text}</p>
    </PlayCardDiv>
  );
};

export default PlayCard;
