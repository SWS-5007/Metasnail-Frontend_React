import React from "react";

import metaImg from "assets/buttons/Metasnails text shadow.png";
import { MetaPartDiv } from "./meta.styled";

const MetasnailsPart = () => {
  return (
    <MetaPartDiv className="bg-[#0049B1] pb-48">
      <img
        src={metaImg}
        alt="metaimg"
        className="m-auto max-w-[1024px] w-full"
      />
    </MetaPartDiv>
  );
};

export default MetasnailsPart;
