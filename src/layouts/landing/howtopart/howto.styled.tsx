import styled from "styled-components";

import parentbg from "assets/bg-shape3-home6.png";
import howtobg from "assets/character-dodg-2.png";

export const HowToRoadMapDiv = styled.div`
  background-color: #1459ba;
  background-image: url(${parentbg});
  background-position: bottom right;
  .howto-overlay {
    background-image: url(${howtobg});
    background-position: top center;
    background-size: auto;
    opacity: 0.27;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }
`;

export const CountPartDiv = styled.div`
  h6 {
    :before {
      background: #ff9900;
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      left: 0;
      border-radius: 50%;
    }
  }
`;

export const HowToDiv = styled.div`
  .metasnail-h6 {
    :before {
      background: #0ec6ff;
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      left: 0;
      border-radius: 50%;
    }
  }
  .howto-card-div {
    & > * {
      width: -webkit-fill-available;
    }
  }
  .howto-button-group {
    img {
      transition-duration: 0.3s;
      transition-property: transform;
      transition-timing-function: ease-out;
      filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
        hue-rotate(360deg);
      :hover {
        filter: brightness(100%) contrast(100%) saturate(200%) blur(0px)
          hue-rotate(360deg);
        transform: translateY(-8px);
      }
    }
  }
`;

export const HowToCardDiv = styled.div`
  .card-no-mark {
    background-image: linear-gradient(145deg, #0039e4, #04dbf1);
  }
`;
