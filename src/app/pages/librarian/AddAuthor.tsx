import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const AddAuthor = () => {
    return (
        <Segment>
            <h1>Add Author:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Author name: <input type="text"/></h1>            
        </Segment>
    )
}
export default AddAuthor