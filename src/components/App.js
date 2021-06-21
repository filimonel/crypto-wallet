import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, provider } from "./../Firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "./../features/userSlice";
import LandingPage from "./LandingPage";
import Wallet from "./Wallet";
function App() {
  // Dispatch enables us to set a new value. e.i. setUserName()
  const dispatch = useDispatch();

  // Fetching username and user email state value via redux.
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          // This is the action payload
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };

  const handleSignOut = () => {
    // Notifies firebase and redux that user has signed out - empty user state to null
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  console.log(userName);

  return (
    <Router>
      <Switch>
        <AppWrapper>
          {userName ? (
            <Route exact path="/">
              {/* <Wallet handleSignOut={handleSignOut} /> */}
              <button
                style={{ color: "white", background: "white" }}
                onClick={handleSignIn}
              ></button>
            </Route>
          ) : (
            <Route exact path="/signin">
              {/* <LandingPage handleSignIn={handleSignIn} /> */}
              <button
                style={{ color: "white", background: "white" }}
                onClick={handleSignOut}
              ></button>
            </Route>
          )}
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
