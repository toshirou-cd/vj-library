import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const UpdateAuthor = () => {
    return (
        <Segment>
            <h1>Update Author:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Author name: <input type="text"/></h1>            
        </Segment>
    )
}
export default UpdateAuthor