import styled from "styled-components";
import "./../index.css";
const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper>
      <h1 className="gradient-text">Keep</h1>
    </LoadingScreenWrapper>
  );
};

const LoadingScreenWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    background-color: #f3ec78;
    background-image: conic-gradient(#f3ec78, #af4261);
    background-image: linear-gradient(
      45deg,
      #ca4246 16.666%,
      #e16541 16.666%,
      #e16541 33.333%,
      #f18f43 33.333%,
      #f18f43 50%,
      #8b9862 50%,
      #8b9862 66.666%,
      #476098 66.666%,
      #476098 83.333%,
      #a7489b 83.333%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 600;
    font-size: 6em;
    animation: rainbow-text-simple-animation-rev 3s ease infinite;
  }
`;

export default LoadingScreen;
