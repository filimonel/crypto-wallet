import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
function App() {
  return (
    <AppWrapper>
      <LoadingScreen />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
