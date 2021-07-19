import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import MainLibrary from "./MainLibrary";
import MyBooks from "./MyBooks";
import MyHistory from "./MyHistory";
import MyRequest from "./MyRequest";

const PatronMainPage: React.FC = () => {
  return (
    <div>
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
};

export default PatronMainPage;
