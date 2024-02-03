import styled from "styled-components";

export const MeetPartDiv = styled.div`
  & > div {
    background-color: transparent;
    background-image: radial-gradient(
      at center center,
      #ffffff4d 0%,
      #f2295b08 100%
    );
  }
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
  .meet-btn {
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;
    filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
      hue-rotate(0deg);
    :hover {
      filter: brightness(100%) contrast(100%) saturate(200%) blur(0px)
        hue-rotate(360deg);
      transform: translateY(-8px);
    }
  }
  .lebraniya {
    transform: rotateZ(1.91deg);
  }
`;
