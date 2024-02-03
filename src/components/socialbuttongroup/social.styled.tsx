import styled from "styled-components";

export const SocialDiv = styled.div`
  & > * {
    transition: all 0.3s;
    :hover {
      transform: scale(0.9);
    }
  }
  & > *:not(:first-child) {
    margin-top: 14px;
  }
`;
