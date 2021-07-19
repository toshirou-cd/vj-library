import React, { useState } from 'react';
import { Container, Menu,MenuItem, Search, Segment, MenuMenu } from 'semantic-ui-react';
import OnTrendingBookList from "./OnTrendingBookList";
import NewBookList from './NewBookList';

const panes = [
    {
      menuItem: 'On trending',
      render: () => <OnTrendingBookList/>,
    },
    {
      menuItem: 'New',
      render: () => <NewBookList/>,
    }
  ]

const MainLibrary:React.FC= () => {
    const [activeName, setActiveName] = useState<string>('On trending')
    return (
        <Container className="BooksContainier">
            <Menu secondary pointing >
                <MenuMenu>
                    <MenuItem  name='On trending'
                               active={activeName === 'On trending'}
                               onClick={()=> setActiveName("On trending")} />
                    <MenuItem  name='New'
                                 active={activeName === 'New'}
                                 onClick={() => setActiveName("New")}/>
                    
                </MenuMenu>
                <Menu.Menu position='right'>
                    <Search />
                </Menu.Menu>
            </Menu>
            <Segment>
                {activeName === "On trending" ? <OnTrendingBookList/>: <NewBookList/>}
            </Segment>
        </Container>
    )
}

export default MainLibrary
