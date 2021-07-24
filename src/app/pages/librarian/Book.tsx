import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Image, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell, Grid, GridColumn } from 'semantic-ui-react';
import "./Library.css";
import DetailBook from "./DetailBook";
import AddBook from "./AddBook";
const BookList = () => {
    const [trigger, setTrigger] = useState<boolean>(false)
    const [addTrigger, setAddTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Book List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setAddTrigger(true)}>
                Create new book
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Book Type</TableHeaderCell>
                        <TableHeaderCell>Language</TableHeaderCell>
                        <TableHeaderCell>Date created</TableHeaderCell>
                        <TableHeaderCell>Detail</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="12">
                                    The fault in our stars
                                    <br/>
                                    John Green
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>Online Book</TableCell>
                        <TableCell>English</TableCell>
                        <TableCell>1-1-2021</TableCell>
                        <TableCell><a onClick={() => setTrigger(true)}>Detail</a></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="12">
                                    Howl's moving castle
                                    <br/>
                                    Diana Wynne Jones
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>Online Book</TableCell>
                        <TableCell>English</TableCell>
                        <TableCell>1-1-2021</TableCell>
                        <TableCell><a>Detail</a></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Paging" /> 
            </Segment>  
                {trigger && <DetailBook/> } 
                {addTrigger && <AddBook/> }
        </Container>
    );
};

export default BookList;
