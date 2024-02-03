import styled from "styled-components";

export const FooterDiv = styled.div`
  contain: content;
  a {
    text-decoration: none;
    :hover {
      color: #fff;
      border-bottom: 1.5px solid #fff;
    }
  }

  @keyframes elementor-animation-pop {
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
