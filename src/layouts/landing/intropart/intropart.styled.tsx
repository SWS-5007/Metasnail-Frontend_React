import styled from "styled-components";

import introBG from "assets/hert.jpg";
import introOverlay from "assets/bg-banner-home7.png";
import introCard from "assets/introCard.jpg";

export const IntroPartSection = styled.div`
  background-color: #144281;
  background-image: url(${introOverlay});
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 1;
`;

export const IntroOverlay = styled.div`
  background-image: url(${introBG});
  opacity: 0.31;
  mix-blend-mode: overlay;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}`;

export const IntroImg = styled.img`
  padding-left: 5%;
  transition: 0.3s all;
  :hover {
    transform: scale(0.9);
  }
`;

export const IntroCard = styled.div`
  box-shadow: -9px 0px 16px 0px rgb(0 0 0 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
`;

export const IntroCardOverlay = styled.div`
  background-image: url(${introCard});
  opacity: 0.4;
`;

export const BtnGetMyDiscount = styled.div`
  contain: content;
  transition: 0.5s all;
  box-shadow: 8px 8px 18px 0px rgb(254 76 28 / 30%);
`;

export const BtnHowItworks = styled.div`
  div {
    transition: all 0.3s;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
  }
`;

export const ApplicationGrid = styled.div`
  & > *:not(:first-child) {
    margin-left: 30px;
  }

  svg {
    transition: all 0.5s;
    cursor: pointer;
  }
`;

export const IntroText = styled.div`
  h6 {
    display: flex;
    align-items: center;
    :before {
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      left: 0;
      border-radius: 50%;
      background: #000000;
    }
  }
  img {
    transition: all 0.3s;
    filter: brightness(100%) contrast(100%) saturate(200%) blur(0px)
      hue-rotate(360deg);
    :hover {
      filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
        hue-rotate(360deg);
      animation-name: elementor-animation-pulse-grow;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @keyframes elementor-animation-pulse-grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
