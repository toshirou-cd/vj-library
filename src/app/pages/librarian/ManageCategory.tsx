import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import "./Library.css";
import AddCategory from "./AddCategory";
import UpdateCategory from "./UpdateCategory";
const CategoryList = () => {
    const [addTrigger, setAddTrigger] = useState<boolean>(false)
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Category List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setAddTrigger(true)}>
                Create new category
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                            Novel
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right" onClick={() => setUpdateTrigger(true)}>Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                            Drama
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Paging" /> 
            </Segment>  
                {addTrigger && <AddCategory/> }
                {updateTrigger && <UpdateCategory/> }
        </Container>
    );
};

export default CategoryList;
