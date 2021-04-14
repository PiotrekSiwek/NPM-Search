import React, {FC, useContext, useEffect, useState} from "react";
import {Dimmer, Loader, Segment, Table} from 'semantic-ui-react';
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";
import TableNPM from "./TableNPM";
import QueryHints from "./QueryHints";

const SearchResults: FC = () => {

    const {npmName} = useContext(SearchedPackageContext);
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [dimmer, setDimmer] = useState(false);

    const getNpm = async () => {
        try {
            const data = await fetch(`https://registry.npmjs.org/-/v1/search?text=${npmName}`);
            const res = await data.json();
            setResults([...res.objects]);
            setDimmer(false);
        } catch (e) {
            setError(true);
        }
    }

    useEffect(() => {
        setDimmer(true)
        getNpm()
    }, [npmName])


    return (
        <>
            <QueryHints/>
            {dimmer &&
            <Dimmer active inverted>
                <Loader>Loading</Loader>
            </Dimmer>}
            <Segment>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            {error ?
                                <Table.HeaderCell colSpan='5'>Bład pobierania danych</Table.HeaderCell> :
                                <Table.HeaderCell colSpan='5'>Rezultat wyszukiwania dla {npmName}</Table.HeaderCell>
                            }
                        </Table.Row>
                    </Table.Header>
                    {results &&
                    results.map((elm: any) => {
                        return <TableNPM
                            key={elm.package.name}
                            name={elm.package.name}
                            description={elm.package.description}
                            linknpm={elm.package.links.npm}
                            linkhome={elm.package.links.homepage}
                            version={elm.package.version}
                        />
                    })
                    }
                </Table>
            </Segment>
        </>
    )
}

export default SearchResults;