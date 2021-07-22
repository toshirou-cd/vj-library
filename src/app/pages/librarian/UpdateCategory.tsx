import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const UpdateCategory = () => {
    return (
        <Segment>
            <h1>Update Category:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Category name: <input type="text"/></h1>            
        </Segment>
    )
}
export default UpdateCategory