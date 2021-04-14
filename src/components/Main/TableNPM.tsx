import React, {FC} from "react";
import {Button, Icon, Label, Table} from "semantic-ui-react";

interface FetchedData{
    name:string;
    description:string;
    linknpm:string;
    linkhome:string;
    version:number | string;
}

const TableNPM:FC<FetchedData> = ({name, description, linknpm,linkhome,version}) => {
    return(
        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing singleLine>
                    <Label>
                        <Icon name='hand point right'/> {name}
                    </Label>
                </Table.Cell>
                <Table.Cell>
                    {description}
                </Table.Cell>
                <Table.Cell>
                    <Button primary as={"a"} href={linknpm}>
                        Npm Page
                    </Button>
                </Table.Cell>
                <Table.Cell>
                    <Button primary as={"a"} href={linkhome}>
                        Home Page
                    </Button>
                </Table.Cell>
                <Table.Cell collapsing textAlign='right'>
                    ver.{version}
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    )
}

export default TableNPM;