import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import "./Library.css";

const UpdatePublisher = () => {
    return (
        <Segment>
            <h1>Update Publisher:</h1>
            <Button color="green" floated="right">SAVE</Button>
            <h1>Publisher name: <input type="text"/></h1>            
        </Segment>
    )
}
export default UpdatePublisher