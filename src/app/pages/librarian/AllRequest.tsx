import React, { useState } from "react";
import { Dropdown, Label, Table } from "semantic-ui-react";
import CurrentRequest from "./CurrentRequest";

const bookRequestType = [
  {
    key: "Save Request",
    text: "Save Request",
    value: "Save Request ",
  },
  {
    key: "Sent Request",
    text: "Sent Request",
    value: "Sent Request",
  },
  {
    key: "Processed Request",
    text: "Processed Request",
    value: "Processed Request",
  },
  {
    key: "All Request",
    text: "All Request",
    value: "All Request",
  },
];

const AllRequest = () => {
    const [detail, setDetail] = useState(false)
  return (
    <div>
      <h4>
        Type of request :{" "}
        <Dropdown
          selection
          placeholder="Type of request"
          options={bookRequestType}
        />
      </h4>
      <br />
      <Table color='red' striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>Request ID</Table.HeaderCell>
            <Table.HeaderCell>Number of book</Table.HeaderCell>
            <Table.HeaderCell>Send Date</Table.HeaderCell>
            <Table.HeaderCell>Process Date</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>1</Table.Cell>
            <Table.Cell>#REQUEST01</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>20-07-2021</Table.Cell>
            <Table.Cell>-</Table.Cell>
            <Table.Cell>
              <a href="#" onClick={() => setDetail(true)}>Detail</a>
            </Table.Cell>
            <Table.Cell>
              <Label content="Saved" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>2</Table.Cell>
            <Table.Cell>#REQUEST02</Table.Cell>
            <Table.Cell>20</Table.Cell>
            <Table.Cell>20-07-2021</Table.Cell>
            <Table.Cell>-</Table.Cell>
            <Table.Cell>
              <a href="#">Detail</a>
            </Table.Cell>
            <Table.Cell>
              <Label content="Sent"  color='yellow'/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>3</Table.Cell>
            <Table.Cell>#REQUEST03</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>20-07-2021</Table.Cell>
            <Table.Cell>21-07-2021</Table.Cell>
            <Table.Cell>
              <a href="#">Detail</a>
            </Table.Cell>
            <Table.Cell>
              <Label content="Aprroved"  color='green'/>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>3</Table.Cell>
            <Table.Cell>#REQUEST03</Table.Cell>
            <Table.Cell>50</Table.Cell>
            <Table.Cell>20-07-2021</Table.Cell>
            <Table.Cell>21-07-2021</Table.Cell>
            <Table.Cell>
              <a href="#">Detail</a>
            </Table.Cell>
            <Table.Cell>
              <Label content="Decline"  color='red'/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
        {detail && <CurrentRequest/>}
    </div>
  );
};

export default AllRequest;
