import React from "react";
import { Button, Segment } from 'semantic-ui-react';
import "./Admin.css";

const SetNumber = () => {
    return (
        <Segment>
            <h1>Number: <input type="text"></input></h1>
            <Button color="yellow">Change</Button>
        </Segment>
    );
};

export default SetNumber;
