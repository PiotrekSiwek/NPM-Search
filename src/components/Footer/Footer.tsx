import React, {FC} from "react";
import {Button, Icon, Modal, Segment} from "semantic-ui-react";


const Footer:FC = () =>{

    const [open, setOpen] = React.useState(false)

    return(
        <>
        <Segment.Group horizontal>
            <Segment textAlign={"center"}>
                <Button color='facebook' as="a" href="https://www.facebook.com/piotr.siwek.52">
                    <Icon name='facebook' /> Facebook
                </Button>
            </Segment>
            <Segment textAlign={"center"}>
                <Button color='black' as="a" href="https://github.com/PiotrekSiwek/NPM-Search">
                    <Icon name='github' /> github
                </Button>
            </Segment>
            <Segment textAlign={"center"}>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={   <Button color='youtube'>
                        <Icon name='youtube' /> YouTube
                    </Button>}
                >
                    <Modal.Header>Watch video</Modal.Header>
                    <Modal.Description>
                        <iframe width="900" height="506" src="https://www.youtube.com/embed/seU46c6Jz7E"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>"
                    </Modal.Description>
                </Modal>
            </Segment>
        </Segment.Group>

        </>
    )

}

export default Footer