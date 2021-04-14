import React, {FC} from "react";
import {Segment, Button, Icon} from "semantic-ui-react";

const Footer:FC = () =>{
    return(
        <Segment.Group horizontal>
            <Segment textAlign={"center"}>
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                </Button>
            </Segment>
            <Segment textAlign={"center"}>
                <Button color='twitter'>
                    <Icon name='twitter' /> Twitter
                </Button>
            </Segment>
            <Segment textAlign={"center"}>
                <Button color='youtube'>
                    <Icon name='youtube' /> YouTube
                </Button>
            </Segment>
        </Segment.Group>
    )

}

export default Footer