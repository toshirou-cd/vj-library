import React, {useState} from "react";
import { Container, Button, Icon, Pagination, Segment, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell } from 'semantic-ui-react';
import "./Admin.css";
import AccountDetail from "./AccountDetail";
import CreateAccount from "./CreateAccount";
import UpdateAccount from "./UpdateAccount";
const ManageAccount = () => {
    const [createTrigger, setCreateTrigger] = useState<boolean>(false)
    const [detailTrigger, setDetailTrigger] = useState<boolean>(false)
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false)
    return (
        <Container className="BooksContainer">
            <Segment className="BookList">
            <h2>Account List:</h2>
            <Button color="blue" icon content="Sort">
                Sort by
                <Icon name="sort alphabet ascending" />
            </Button>
            <Button color="red" floated="right" onClick={() => setCreateTrigger(true)}>
                Create new account
            </Button>
            <p></p>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Number</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Role</TableHeaderCell>
                        <TableHeaderCell>Detail</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Hai Long</TableCell>
                        <TableCell>Admin</TableCell>
                        <TableCell>
                            <p onClick={() => setDetailTrigger(true)}>Detail</p>
                            <Button color="yellow" floated="right" onClick={() => setUpdateTrigger(true)}>Update</Button>
                            <Button color="red" floated="right">Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Hoang Anh</TableCell>
                        <TableCell>Librarian</TableCell>
                        <TableCell>
                            Detail
                            <Button color="yellow" floated="right">Update</Button>
                            <Button color="red" floated="right">Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination defaultActivePage={1} totalPages={5} className="Paging" /> 
            </Segment>  
                {createTrigger && <CreateAccount/> }
                {detailTrigger && <AccountDetail/> }
                {updateTrigger && <UpdateAccount/> }
        </Container>
    );
};

export default ManageAccount;
