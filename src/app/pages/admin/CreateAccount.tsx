import React from "react";
import { Button, Dropdown, DropdownItem, Segment } from 'semantic-ui-react';
import "./Admin.css";

const CreateAccount = () => {
    return (
        <Segment>
            <h1>Create account: <input type="text"></input></h1>
            <h3>Name: <input type="text"></input></h3>
            <h3>Password: <input type ="text"></input></h3>
            <h3>
                Role: 
                <Dropdown>
                    <DropdownItem>User</DropdownItem>
                    <DropdownItem>Librarian</DropdownItem>
                    <DropdownItem>Chief Librarian</DropdownItem>
                    <DropdownItem>Admin</DropdownItem>
                </Dropdown>
            </h3>
            <h3>Department: <input type="text"/></h3>
            <Button color="red" floated="right">Create</Button>
        </Segment>
    );
};

export default CreateAccount;
