import styled from "styled-components";
import "./../index.css";

const LandingPage = ({ handleSignIn }) => {
  console.log(handleSignIn);
  return (
    <LandingPageWrapper>
      <TextContainer>
        <h1 className="gradient-text">keeper</h1>
        <h2>Crypto Wallet</h2>
        <button onClick={handleSignIn}>Sign in</button>
      </TextContainer>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
    font-size: 7rem;
    animation: rainbow-text-simple-animation-rev 7s ease infinite;
  }
  h2 {
    color: white;
    font-size: 1rem;
    font-weight: 100;
    text-transform: uppercase;
    margin-top: 20px;
  }
  button {
    width: 160px;
    height: 35px;
    font-family: "Archivo", sans-serif;
    font-weight: 300;
    background: #2128339e;
    color: white;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px 10px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    transition: 0.5s ease;
    &:hover {
      background: #212833;
      transition: 0.5s ease;
    }
  }
`;

export default LandingPage;
