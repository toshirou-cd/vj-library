import React from "react";
import { clearLine } from "readline";
import {
  Container,
  Item,
  Segment,
  Table,
  Image,
  Header,
  Button,
} from "semantic-ui-react";

const DetailUsserReq = () => {
  return (
    <Segment>
      <br />
      <h3>User 's Request :</h3>
      <br />
      <Item.Group>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <Item.Content verticalAlign="top">
            <Item.Header>Requester : AnhN</Item.Header>
            <Item.Description>Time request : </Item.Description>
            <Item.Description>Type request : </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Table striped size="large">
        <Table.Header>
          <Table.HeaderCell collapsing>Number</Table.HeaderCell>
          <Table.HeaderCell> Book Name</Table.HeaderCell>
          <Table.HeaderCell>Durarion</Table.HeaderCell>
          <Table.HeaderCell fixed singleLine>
            Reason
          </Table.HeaderCell>
          <Table.HeaderCell>Approve</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell singleLine>
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
            <Table.Cell>14 days</Table.Cell>
            <Table.Cell>Entertainment</Table.Cell>
            <Table.Cell>
              <input type="checkbox" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7" >
                    <Button positive floated='right' >Save</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
      </Table>
    </Segment>
  );
};

export default DetailUsserReq;
