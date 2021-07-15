import React from 'react'
import {Icon, Menu, Item,Button, Dropdown} from 'semantic-ui-react'


const TopBar = () => {
    return (
            <Menu size='small' className="TopBar">
            <Menu.Menu position='right'>
                <Dropdown item text='AnhNH'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Account</Dropdown.Item>
                        <Dropdown.Item>Change role</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
            <Menu.Item>
                <Icon link name='bell'></Icon>
            </Menu.Item>
        </Menu>
    )
}

export default TopBar
