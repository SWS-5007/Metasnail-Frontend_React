import styled from "styled-components";

import bg from "assets/bg-shape1-home6.png";
import piece2 from "assets/card-piece1.png";
import piece1 from "assets/card-piece2.png";

import catImg from "assets/characters/cat.png";

export const PlayEarnDiv = styled.div`
  background-image: url(${bg});
  .play-subtitle {
    :before {
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      background: #0ec6ff;
      left: 0;
      border-radius: 50%;
    }
    :after {
      position: absolute;
      content: "";
      width: 7px;
      height: 7px;
      background: #0ec6ff;
      right: 0;
      border-radius: 50%;
    }
  }
`;

export const BgText = styled.div`
  -webkit-text-stroke-color: #ffffff54;
  white-space: nowrap;
  z-index: 1;
  font-family: "Red Hat Display", sans-serif;
  font-size: 10.4vw;
  font-weight: 900;
  color: #f1f6ff;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
`;

export const PlayCardDiv = styled.div`
  transition: 0.3s all;
  contain: content;
  :after {
    transition: 0.3s all;
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -1;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-color: #1459ba80;
    background-image: url(${piece1});
    background-position: bottom right;
    background-repeat: no-repeat;
  }
  :before {
    transition: 0.3s all;
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: #1459ba80;
    background-image: url(${piece2});
    background-position: top left;
    background-repeat: no-repeat;
  }
  :hover {
    box-shadow: 8px 8px 30px 0px rgb(42 67 113 / 30%);
    :after {
      opacity: 1;
    }
    :before {
      opacity: 1;
    }
  }
  i {
    :before {
      font-size: 40px !important;
    }
  }
`;

export const PlayOverlay = styled.div`
  z-index: 0;
  background-color: #ffffff00;
  background-image: url(${catImg});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.11;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
`;

export const PlayCard2Div = styled.div`
  :hover {
    & > :first-child {
      background-image: none;
      background-color: white;
    }
  }
  & > :first-child {
    background-image: linear-gradient(145deg, #0039e4, #04dbf1);
    transition: 0.5s all;
    box-shadow: 8px 8px 20px 0px rgb(2 156 236 / 30%);
  }
  i {
    :before {
      font-size: 25px !important;
    }
  }
`;

export const EcosystemDiv = styled.div`
  .eco-title {
    -webkit-text-stroke-color: #ffffff26;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    font-family: "Red Hat Display", sans-serif;
    font-size: 10.4vw;
    font-weight: 900;
    line-height: 72px;
    color: #f1f6ff;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
  }
  .eco-text {
    h6 {
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
  }
`;
