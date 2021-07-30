import React from "react";
import { Button, Segment } from 'semantic-ui-react';
import "./Admin.css";

const AccountDetail = () => {
    return (
        <Segment>
            <h1>Account detail: <input type="text"></input></h1>
            <Button color="red" floated="right">Account's log</Button>
            <h3>Hai Long</h3>
            <h3>Password: xxxxxxxx</h3>
            <h3>Role: Admin</h3>
            <h3>Department: Vietjet</h3>
        </Segment>
    );
};

export default AccountDetail;
