import React, {useContext, useState, useEffect} from "react";
import {useQuery} from "react-query";
import {Message, Placeholder} from "semantic-ui-react";
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";

const fetchHints = async (npmName:string, numberHints:number) => {
    const response = await fetch(`https://api.datamuse.com/words?ml=${npmName}&max=${numberHints}`);
    return response.json();
}

const QueryHints = () => {

    const {npmName} = useContext(SearchedPackageContext);
    const [numberHints, setNumberHints] = useState(5)
    const {data, status} = useQuery(["hint", npmName, numberHints], () => fetchHints(npmName, numberHints));

    useEffect(()=>{
        const counter = setInterval(()=> {
            const draw = Number(Math.floor(Math.random() * 10));
            setNumberHints(draw);
        return () => clearInterval(counter)  ;
        },20000)
    },[])

    return (
        <>
            {status === "loading" &&
                <div>loading</div>
            }
            {status === "success" &&
            <Message>
                <Message.Header>
               Wyrazy bliskoznaczne - jeśli znajdziemy na serwerze aktualniejsze dane to pojawią sią automatycznie:
                </Message.Header>
                <Message.Content>
                    <Placeholder>
                        <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
                    {data.map((elm: any, index:number) => <span key={index}> {`${elm.word} `}</span>)}
                        </div>
                    </Placeholder>
                </Message.Content>
                </Message>
            }
            {status === "error" &&
            <div>error</div>
            }
        </>
    )
}

export default QueryHints;
