import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Input,
  Menu,
  Search,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import DetailReqHis from "../patrons/DetailReqHis";
import DetailUsserReq from "./DetailUsserReq";
import './test.css'

enum ACTIVE_NAME {
  NEW_REQUEST = "New Request",
  PROCESSED_REQUEST = "Processed Request",
}
const requestType = [
  {
    key: "Online Borrow Request",
    text: "Online Borrow Request",
    value: "Online Borrow Request",
  },
  {
    key: "Offline Borrow Request",
    text: "Offline Borrow Request",
    value: "Offline Borrow Request ",
  },
  {
    key: "Extend Request",
    text: "Extend Request",
    value: "Extend Request",
  },
];

const UserRequest = () => {
  const [activeName, setActiveName] = useState<string>(ACTIVE_NAME.NEW_REQUEST);

  const [activeDetail, setActiveDetail] = useState(false);

  return (
    <Container>
      <br />
      <br />

      <Menu pointing secondary>
        <Menu.Menu>
          <Menu.Item
            name="New Request"
            active={activeName === ACTIVE_NAME.NEW_REQUEST}
            onClick={() => setActiveName(ACTIVE_NAME.NEW_REQUEST)}
          ></Menu.Item>
          <Menu.Item
            name="Processed Request"
            active={activeName === ACTIVE_NAME.PROCESSED_REQUEST}
            onClick={() => setActiveName(ACTIVE_NAME.PROCESSED_REQUEST)}
          ></Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Search />
        </Menu.Menu>
      </Menu>

      <Dropdown className="DropdownTest" selection placeholder="Type of request" options={requestType} />
      
      <Segment>
        <Table columns="7" striped singleLine selectable color="red">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Number</TableHeaderCell>
              <TableHeaderCell width="5">Requester Name</TableHeaderCell>
              <TableHeaderCell collapsing>Date Request</TableHeaderCell>
              <TableHeaderCell>Number of Books</TableHeaderCell>
              <TableHeaderCell>Details</TableHeaderCell>
              <TableHeaderCell collapsing>Accept</TableHeaderCell>
              <TableHeaderCell collapsing>Decline</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Anh Nguyen Hoang</TableCell>
              <TableCell>20-7-2021</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <a href="#" onClick={() => setActiveDetail(true)}>
                  Detail
                </a>
              </TableCell>
              <TableCell>
                <Button positive content="Accept"></Button>
              </TableCell>
              <TableCell>
                <Button color="red" content="Decline"></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1s</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1s</TableCell>
            </TableRow>
          </TableBody>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>

      
          {activeDetail && <DetailUsserReq/> }
      
    </Container>
  );
};

export default UserRequest;
