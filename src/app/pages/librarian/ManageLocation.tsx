import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import "./Library.css";
import AddLocation from "./AddLocation";
import UpdateLocation from "./UpdateLocation";
const LocationList = () => {
    const [addTrigger, setAddTrigger] = useState<boolean>(false)
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Location List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setAddTrigger(true)}>
                Create new location
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Number of bookshelves</TableHeaderCell>
                        <TableHeaderCell>Bookshelves in specific location</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Vietjet 1</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>
                            ??
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right" onClick={() => setUpdateTrigger(true)}>Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vietjet 2</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>
                            ??
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vietjet 3</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>
                            ??
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vietjet 4</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>
                            ??
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Button" /> 
            </Segment>  
                {addTrigger && <AddLocation/> }
                {updateTrigger && <UpdateLocation/> }
        </Container>
    );
};

export default LocationList;
