import React, { useState } from "react";
import { Container, Menu, MenuItem, Search, Segment } from "semantic-ui-react";
import CurrentRequest from "./CurrentRequest";
import AllRequest from "./AllRequest";


enum ACTIVE_NAME{
    CURRENT_REQUEST = 'Current Request',
    ALL_REQUEST = 'ALL Request'
}

const MyRequest = () => {
    const [activeName, setActiveName] = useState(ACTIVE_NAME.CURRENT_REQUEST)
  return (
    <Container>
      <Menu secondary pointing> 
        <Menu.Menu>
          <Menu.Item active={activeName===ACTIVE_NAME.CURRENT_REQUEST} 
                        onClick={() => setActiveName(ACTIVE_NAME.CURRENT_REQUEST)}>Current request</Menu.Item>
          <Menu.Item active={activeName=== ACTIVE_NAME.ALL_REQUEST}
                        onClick={() => setActiveName(ACTIVE_NAME.ALL_REQUEST)}>All Requests</Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <MenuItem >
            <Search></Search>
          </MenuItem>
        </Menu.Menu>
      </Menu>
      
            {activeName === ACTIVE_NAME.CURRENT_REQUEST ? <CurrentRequest/> : <AllRequest/>}
      
    </Container>
  );
};

export default MyRequest;
