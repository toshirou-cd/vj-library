import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import "./Library.css";
import AddBookshelf from "./AddBookshelf";
import UpdateBookshelf from "./UpdateBookshelf";
const BookshelfList = () => {
    const [addTrigger, setAddTrigger] = useState<boolean>(false)
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Bookshelf List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setAddTrigger(true)}>
                Create new bookshelf
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Location</TableHeaderCell>
                        <TableHeaderCell>Spots</TableHeaderCell>
                        <TableHeaderCell>Columns and rows</TableHeaderCell>
                        <TableHeaderCell>Books</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Vietjet 1-1</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>
                            90
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right" onClick={() => setUpdateTrigger(true)}>Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Vietjet 1-2</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>
                            90
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Vietjet 2-1</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>
                            90
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Vietjet 2-2</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>
                            90
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Paging" /> 
            </Segment>  
                {addTrigger && <AddBookshelf/> }
                {updateTrigger && <UpdateBookshelf/> }
        </Container>
    );
};

export default BookshelfList;
