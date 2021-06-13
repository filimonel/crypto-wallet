import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Home from "./Home";
function App() {
  const [loading, setLoading] = useState(true);
  return (
    <Router>
      <Switch>
        <AppWrapper>
          <LandingPage />
          <Home />
        </AppWrapper>
      </Switch>
    </Router>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export default App;
