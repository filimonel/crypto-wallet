import styled from "styled-components";

const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper>
      <h1>Keep</h1>
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
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-image: conic-gradient(#f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export default LoadingScreen;
