import React from "react";
import SideBarData from "./SideBarData";
import { Menu, Sidebar } from "semantic-ui-react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <Sidebar
          visible={true}
          className="SideBar">
          
        <Menu vertical className="MenuList">
          {SideBarData.map((val, key) => {
            return (
              <Menu.Item
                as={NavLink}
                to={val.path}
                activeClassName="Selected"
                className="MenuItem"
                fitted="horizontally"
                key={key}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
