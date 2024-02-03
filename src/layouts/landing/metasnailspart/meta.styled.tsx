import styled from "styled-components";
import bg from "assets/bg-shape2-home6.jpg";

export const MetaPartDiv = styled.div`
  background-image: url(${bg});
  background-position: bottom right;
  background-repeat: no-repeat;
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  img {
    filter: brightness(100%) contrast(100%) saturate(200%) blur(0px)
      hue-rotate(360deg);
    transform: translateY(-55px);
  }
`;
