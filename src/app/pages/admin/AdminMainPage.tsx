import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import TopBar from "../../components/TopBar/TopBar";
import MasterData from "./MasterData";
import Notification from "./Notification";
import ManageAccount from "./ManageAccount";

const AdminMainPage: React.FC = () => {
  return (
    <div>
      <TopBar />
      <BrowserRouter>
        <AdminSideBar />
        <Route path="/masterdata" component={MasterData} />
        <Route path="/notification" component={Notification} />
        <Route path="/manageaccount" component={ManageAccount} />
      </BrowserRouter>
    </div>
  );
};

export default AdminMainPage;
