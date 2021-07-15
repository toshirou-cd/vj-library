import React from "react";
import SideBarData from "./SideBarData";
import { Menu, Sidebar, Image } from "semantic-ui-react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
const SideBar = () => {
  return (
    <div>
      <Sidebar as={Menu} vertical animation="uncover" visible={true} className="SideBar">
        <Image src={Logo} size="small" className="Logo" />
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
      </Sidebar>
    </div>
  );
};

export default SideBar;
