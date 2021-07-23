import React, { useState } from "react";
import LibSideBarData from "./LibrarianSideBarData";
import {
  Menu,
  Sidebar,
  Image,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Container,
  Item,
} from "semantic-ui-react";
import "../Sidebar/SideBar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
const LibrarianSideBar: React.FC = () => {
  const [subMenu, setSubMenu] = useState(false)
  const showSubMenu = () =>  setSubMenu(!subMenu)

  return (
    <Container>
      <Sidebar
        as={Menu}
        vertical
        animation="uncover"
        visible={true}
        className="SideBar"
      >
        <Image src={Logo} size="small" className="Logo" />
        {LibSideBarData.map((val, key) => {
          return  (
            <>
            <Menu.Item
              onClick={val.subMenu && showSubMenu}
              key={key}
              as={NavLink}
              to={val.path}
              className="MenuItem"
              fitted="horizontally"
              >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </Menu.Item>
            {subMenu && 
              val.subMenu?.map((item,index)=> {
                return (
                  <Menu.Item 
                    className="MenuItem"
                    key={key}
                    as={NavLink}
                    to={item.path}
                    activeClassName="Selected"
                    >
                    <div  id="icon">{item.icon}</div>
                     <div id="title">{item.title}</div>
                  </Menu.Item>
                )
              })}
              </>
          ) 
        })}
      </Sidebar>
    </Container>
  );
};

export default LibrarianSideBar;
