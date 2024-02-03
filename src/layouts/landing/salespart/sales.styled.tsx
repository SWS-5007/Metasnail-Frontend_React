import styled from "styled-components";
import bg from "assets/bg-shape4-home6.png";
import dotBg from "assets/bg3-dots-home6.png";
import cardImg from "assets/introCard.jpg";

import piece1 from "assets/pricing/piece1.png";
import piece2 from "assets/pricing/piece2.png";
import piece3 from "assets/pricing/piece3.png";

export const SalesPartDiv = styled.div`
  background-image: url(${bg});
  background-position: center right;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 50px 0px 160px 0px;
  .sale-overlay {
    background-image: url(${dotBg});
    background-position: 0px 800px;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }
  .sale-card {
    background-image: url(${cardImg});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.26;
  }
  .sale-title-h6 {
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
  .sale-card-group {
    & > * {
      transition: 0.5s all;
      :hover {
        transform: translateY(-15px);
      }
    }
  }
  .sale-card-1 {
    box-shadow: 8px 8px 30px 0px rgb(254 76 28 / 37%);
  }
  .sale-card-2 {
    contain: content;
    box-shadow: 8px 8px 30px 0px rgb(42 67 113 / 30%);
    :before {
      top: 0;
      left: 0;
      background-color: #1459ba;
      background-image: url(${piece1});
      background-position: top center;
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      z-index: -1;
      background-repeat: no-repeat;
    }
    :after {
      background-color: #1459ba;
      background-image: url(${piece2});
      background-position: bottom left;
      bottom: 0;
      left: 0;
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      z-index: -1;
      background-repeat: no-repeat;
    }
  }
  .sale-card-3 {
    contain: content;
    box-shadow: 8px 8px 30px 0px rgb(42 67 113 / 30%);
    :before {
      top: 0;
      left: 0;
      background-color: #1459ba;
      background-image: url(${piece3});
      background-position: top center;
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      z-index: -1;
      background-repeat: no-repeat;
    }
    :after {
      background-color: #1459ba;
      bottom: 0;
      left: 0;
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      z-index: -1;
      background-repeat: no-repeat;
    }
  }
  .card-marker {
    box-shadow: 8px 8px 18px 0px rgb(42 67 113 / 30%);
  }
`;
