import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const UpdateLocation = () => {
    return (
        <Segment>
            <h1>Update Location:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Location name: <input type="text"/></h1>
            <h1>Number of bookshelves: <input type="text"/></h1>
            <h1>Bookshelves in specific location: <input type="text"/></h1>
        </Segment>
    )
}
export default UpdateLocation