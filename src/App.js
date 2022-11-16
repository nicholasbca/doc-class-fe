import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./components/FileUpload";

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/api/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <div>
            <Link className="App-link" to="/">{process.env.REACT_APP_TITLE}</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div> */}
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              {/* <p>The current time is {currentTime}.</p> */}
              <div className="container" style={{ width: "600px" }}>
                <div className="my-3">
                  <h3>Predict</h3>
                </div>
                <FileUpload />
              </div>
            </Route>
            <Route path="/page2">
              <p>This is page 2!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
