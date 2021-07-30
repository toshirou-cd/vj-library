import React from "react";
import { Button, Container } from 'semantic-ui-react';
import "./Admin.css";

const Notification = () => {
    return (
        <Container className="Container">
            <h1>Create notification:</h1>
            <h3>Description: <textarea></textarea></h3>
            <Button color="green" className="CreateButton">Create</Button>
        </Container>
    );
};

export default Notification;
