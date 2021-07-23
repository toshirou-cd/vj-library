import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LibrarianSideBar from "../../components/LibrarianSideBar/LibrarianSideBar";
import TopBar from "../../components/TopBar/TopBar";
import MyRequest from "../librarian/MyRequest";
import Book from "./Book";
import DashBoard from "./DashBoard";
import ManageAuthor from "./ManageAuthor";
import ManageBookshelf from "./ManageBookshelf";
import ManageCategory from "./ManageCategory";
import ManageDepartment from "./ManageDepartment";
import ManageLibrary from "./ManageLibrary";
import ManageLocation from "./ManageLocation";
import ManagePublisher from "./ManagePublisher";
import UserRequest from "./UserRequest";

const LibrarianMainPage: React.FC = () => {
  return (
    <div>
      <TopBar />
      <BrowserRouter>
        <LibrarianSideBar />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/userrequest" component={UserRequest} />
        <Route path="/mybook" component={Book} />
        <Route path="/myrequest" component={MyRequest} />
        <Route path="/managelibrary" component={ManageLibrary} />
        <Route path="/managelibrary/manageauthor" component={ManageAuthor} />
        <Route path="/managelibrary/managecategory" component={ManageCategory} />
        <Route path="/managelibrary/managepublisher" component={ManagePublisher} />
        <Route path="/managelibrary/managelocation" component={ManageLocation} />
        <Route path="/managelibrary/managebookshelf" component={ManageBookshelf} />
        <Route path="/managelibrary/managedepartment" component={ManageDepartment} />
      </BrowserRouter>
    </div>
  );
};

export default LibrarianMainPage;
