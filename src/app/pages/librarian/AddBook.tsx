import React from 'react'
import { Card, Grid, Segment, Button, Icon, Label, Checkbox, TextArea } from 'semantic-ui-react'
import "./Library.css";

const AddBook = () => {
    return (
        <Segment>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card className="BookImageCard">
                            <Icon name="plus circle" size="massive" className="Icon"/>
                            <h1 className="Insert">Insert book cover here</h1>
                        </Card>
                    </Grid.Column>
                    <Grid.Column textAlign="left">
                        <h1>Book name:<input type="text"/></h1>    
                        <h4>Author: Choose</h4>
                        <h4>Copies: <input type="text"/></h4>
                        <h4>Publisher: Choose</h4>
                        <h4>Publishing Year: <input type="text"/></h4>
                        <h4>Department: Choose</h4>
                        <h4>Category: Choose</h4>
                        <h4>Type: <Checkbox label="Offline Book"></Checkbox><Checkbox label="Online Book"></Checkbox></h4>
                        <h4>Location: Choose</h4>
                        <h4>Bookshelf: Choose</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color="red" content="Disable" size="massive"/>
                        <br/>
                        <br/>
                        <Button color="green" content="Save" size="massive"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h4>Description:</h4>
                        <TextArea rows={5} columns={30}></TextArea>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default AddBook