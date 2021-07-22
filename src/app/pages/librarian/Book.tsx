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
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Author</TableHeaderCell>
                        <TableHeaderCell>Category</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow onClick={() => setTrigger(true)}>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    The fault in our stars
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>John Green</TableCell>
                        <TableCell>Novel, Drama</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    Howl's moving castle
                                </GridColumn>
                            </Grid>
                        </TableCell>
                        <TableCell>Diana Wynne Jones</TableCell>
                        <TableCell>Novel, Science Fiction</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    The fault in our stars
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>John Green</TableCell>
                        <TableCell>Novel, Drama</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    Howl's moving castle
                                </GridColumn>
                            </Grid>
                        </TableCell>
                        <TableCell>Diana Wynne Jones</TableCell>
                        <TableCell>Novel, Science Fiction</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    The fault in our stars
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>John Green</TableCell>
                        <TableCell>Novel, Drama</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    Howl's moving castle
                                </GridColumn>
                            </Grid>
                        </TableCell>
                        <TableCell>Diana Wynne Jones</TableCell>
                        <TableCell>Novel, Science Fiction</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    The fault in our stars
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>John Green</TableCell>
                        <TableCell>Novel, Drama</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    Howl's moving castle
                                </GridColumn>
                            </Grid>
                        </TableCell>
                        <TableCell>Diana Wynne Jones</TableCell>
                        <TableCell>Novel, Science Fiction</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    The fault in our stars
                                </GridColumn>
                            </Grid>            
                        </TableCell>
                        <TableCell>John Green</TableCell>
                        <TableCell>Novel, Drama</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Grid>
                                <GridColumn width="1">
                                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" className="Image"/>
                                </GridColumn>    
                                <GridColumn width="9">
                                    Howl's moving castle
                                </GridColumn>
                            </Grid>
                        </TableCell>
                        <TableCell>Diana Wynne Jones</TableCell>
                        <TableCell>Novel, Science Fiction</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Button" /> 
            </Segment>  
                {trigger && <DetailBook/> } 
                {addTrigger && <AddBook/> }
        </Container>
    );
};

export default BookList;
