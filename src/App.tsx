import React from "react";
import "./App.css";
import SideBar from "./app/components/Sidebar/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import MainLibrary from "./app/pages/patrons/MainLibrary";
import MyRequest from "./app/pages/patrons/MyRequest";
import MyBooks from "./app/pages/patrons/MyBooks";
import MyHistory from "./app/pages/patrons/MyHistory";
import TopBar from "./app/components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <SideBar />
        <Route path="/library" component={MainLibrary} />
        <Route path="/myrequest" component={MyRequest} />
        <Route path="/mybook" component={MyBooks} />
        <Route path="/history" component={MyHistory} />
      </BrowserRouter>
    </div>
  );
}

export default App;
