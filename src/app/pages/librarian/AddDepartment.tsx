import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const AddDepartment = () => {
    return (
        <Segment>
            <h1>Add Department:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Department name: <input type="text"/></h1>            
        </Segment>
    )
}
export default AddDepartment