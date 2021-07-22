import React from "react";
import { Menu, Sidebar, Image } from "semantic-ui-react";
import "../Sidebar/SideBar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { ChiefLibSideBarData } from "../LibrarianSideBar/LibrarianSideBarData";
const ChiefLibrarianSideBar:React.FC = () => {
  return (
    <div>
      <Sidebar as={Menu}  vertical animation="uncover" visible={true} className="SideBar">
        <Image src={Logo} size="small" className="Logo" />
          {ChiefLibSideBarData.map((val, key) => {
            return (
              <Menu.Item
                // as={NavLink}
                // to={val.path}
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

export default ChiefLibrarianSideBar;
