import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const UpdateBookshelf = () => {
    return (
        <Segment>
            <h1>Update Bookshelf:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Location: <input type="text"/></h1>    
            <h1>Spots: <input type="text"/></h1> 
            <h1>Columns and rows: <input type="text"/></h1> 
            <h1>Books: <input type="text"/></h1>         
        </Segment>
    )
}
export default UpdateBookshelf