import React, {useState} from "react";
import { Button, Container, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import "./Admin.css";
import SetDuration from "./SetDuration";
import SetNumber from "./SetNumber";

const MasterData = () => {
    const [durationTrigger, setDurationTrigger] = useState<boolean>(false)
    const [numberTrigger, setNumberTrigger] = useState<boolean>(false)
    return (
        <Container className="Container">
            <h1>Master Data:</h1>
            <Grid>
                <GridRow>
                    <GridColumn width="9">
                        <h3>Duration for borrowing book: 2 weeks</h3>
                    </GridColumn>
                    <GridColumn>
                        <Button color="yellow" onClick={() => setDurationTrigger(true)}>Change</Button>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width="9">
                        <h3>Number of borrowed books: 5 books</h3>
                    </GridColumn>
                    <GridColumn>
                        <Button color="yellow" onClick={() => setNumberTrigger(true)}>Change</Button>
                    </GridColumn>
                </GridRow>
            </Grid>
            {durationTrigger && <SetDuration/> }
            {numberTrigger && <SetNumber/> }
        </Container>
    );
};

export default MasterData;
