import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import "./Library.css";
import AddDepartment from "./AddDepartment";
import UpdateDepartment from "./UpdateDepartment";
const DepartmentList = () => {
    const [addTrigger, setAddTrigger] = useState<boolean>(false)
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Department List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setAddTrigger(true)}>
                Create new department
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Vietjet
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right" onClick={() => setUpdateTrigger(true)}>Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Vietjet
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Vietjet
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Vietjet
                            <Button color="red" floated="right">Disable</Button>
                            <Button color="yellow" floated="right">Update</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Button" /> 
            </Segment>  
                {addTrigger && <AddDepartment/> }
                {updateTrigger && <UpdateDepartment/> }
        </Container>
    );
};

export default DepartmentList;
