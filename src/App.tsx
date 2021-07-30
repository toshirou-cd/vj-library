import React, { useState } from "react";
import "./App.css";
import SideBar from "./app/components/Sidebar/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import MainLibrary from "./app/pages/patrons/MainLibrary";
import MyRequest from "./app/pages/patrons/MyRequest";
import MyBooks from "./app/pages/patrons/MyBooks";
import MyHistory from "./app/pages/patrons/MyHistory";
import TopBar from "./app/components/TopBar/TopBar";
import PatronMainPage from "./app/pages/patrons/PatronMainPage";
import LibrarianMainPage from "./app/pages/librarian/LibrarianMainPage";
import ChiefLibrarianMainPage from "./app/pages/chieflirarian/ChiefLibrarianMainPage";
import AdminMainPage from "./app/pages/admin/AdminMainPage";

function App() {

  // const [role, setRole] = useState<string>("patron")
  return (
    <div className="App">
        <LibrarianMainPage/>
    </div>
  );
}

export default App;
