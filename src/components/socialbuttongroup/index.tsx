import React from "react";

import { FaFacebook, FaTwitter, FaTelegram, FaReddit } from "react-icons/fa";
import { SocialDiv } from "./social.styled";

const SocialButtonsGroup = () => {
  return (
    <SocialDiv className="fixed right-0 z-10 bottom-[20%]">
      <a
        href="https://facebook.com"
        rel="noreferrer"
        target="_blank"
        className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#3b5998] text-white text-[25px] flex justify-center items-center cursor-pointer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        rel="noreferrer"
        target="_blank"
        className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#1da1f2] text-white text-[25px] flex justify-center items-center cursor-pointer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://telegram.com"
        rel="noreferrer"
        target="_blank"
        className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#1da1f2] text-white text-[25px] flex justify-center items-center cursor-pointer"
      >
        <FaTelegram />
      </a>
      <a
        href="https://linkedin.com"
        rel="noreferrer"
        target="_blank"
        className="w-[50px] h-[50px] rounded-full border-[3px] border-white bg-[#ff4500] text-white text-[25px] flex justify-center items-center cursor-pointer"
      >
        <FaReddit />
      </a>
    </SocialDiv>
  );
};

export default SocialButtonsGroup;
