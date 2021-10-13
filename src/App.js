import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#110c30";
      showalert("Dark mode has been enabled", "success");
      document.title = "Textutills-Dark";
      setInterval(() => {
        document.title = "Install textutills now";
      }, 2000);
      setInterval(() => {
        document.title = "Textutills is very helpfull";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mode has been disabled", "warning");
      document.title = "Textutills-Home";
    }
  };

  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="Textutills" nav1="Home" nav2="About" mode={mode} togglemode1={togglemode}/>

        <Alert alert={alert} />

        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <Textarea mode={mode} showalert={showalert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// #081a5c
