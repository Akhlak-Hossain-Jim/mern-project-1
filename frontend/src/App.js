import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Layout/Header";
// import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import Singlepage from "./Components/Singlepage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <Singlepage />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

// const Container = styled.div`
//   background-image: url("/images/bg/jute.png");
//   background-repeat: repeat;
//   min-height: 100vh;
//   min-width: 100vw;
//   background-color: #dacfb5;
// `;

export default App;
