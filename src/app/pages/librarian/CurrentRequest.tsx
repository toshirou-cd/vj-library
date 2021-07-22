import React, { useState } from "react";
import { Header, Table, Image, Button } from "semantic-ui-react";
import DetailBook from "../patrons/DetailBook";

const CurrentRequest = () => {
    const [detail, setDetail] = useState(false)
  return (
    <div>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>Number</Table.HeaderCell>
            <Table.HeaderCell>Book Name</Table.HeaderCell>
            <Table.HeaderCell>Book Type</Table.HeaderCell>
            <Table.HeaderCell>Publisher</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell collapsing>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  The fault in our stars
                  <Header.Subheader>John Green</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>Online book</Table.Cell>
            <Table.Cell>Penguins book</Table.Cell>
            <Table.Cell>English</Table.Cell>
            <Table.Cell><a href='#' onClick={() => setDetail(true)}>Detail</a></Table.Cell>
            <Table.Cell>
              <Button circular icon="minus" size="mini" />
            </Table.Cell>
          </Table.Row>

          
        
        
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  The fault in our stars
                  <Header.Subheader>John Green</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>Online book</Table.Cell>
            <Table.Cell>Penguins book</Table.Cell>
            <Table.Cell>English</Table.Cell>
            <Table.Cell><a href='#'>Detail</a></Table.Cell>
            <Table.Cell>
              <Button circular icon="minus" size="mini" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
            <Table.Row >
                <Table.HeaderCell colSpan="7">

                <Button disabled positive content='Send Request' floated='right'/>
                <Button  color='blue' content='Save' floated='right'/>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
      </Table>
      {detail && <DetailBook/>}
    </div>
  );
};

export default CurrentRequest;
