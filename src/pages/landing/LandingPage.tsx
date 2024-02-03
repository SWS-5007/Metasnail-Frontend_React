import IntroPart from "layouts/landing/intropart";
import SliderPart from "layouts/landing/sliderpart";
import PlayEarnPart from "layouts/landing/playearnpart";
import MeetTheHeroPart from "layouts/landing/meettheheropart";
import MetasnailsPart from "layouts/landing/metasnailspart";
import HowToPart from "layouts/landing/howtopart";
import RoadMapPart from "layouts/landing/roadmappart";

import { HowToRoadMapDiv } from "layouts/landing/howtopart/howto.styled";
import SalesStagePart from "layouts/landing/salespart";

const LandingPage = () => {
  return (
    <div className="w-full">
      <IntroPart />
      <SliderPart />
      <PlayEarnPart />
      <MeetTheHeroPart />
      <MetasnailsPart />
      <HowToRoadMapDiv className="relative bg-no-repeat">
        <div className="howto-overlay absolute top-0 left-0 w-full h-full mix-blend-luminosity bg-no-repeat" />
        <div className="max-w-[1200px] m-auto w-[95%]">
          <HowToPart />
          <RoadMapPart />
        </div>
      </HowToRoadMapDiv>
      <SalesStagePart />
    </div>
  );
};

export default LandingPage;
