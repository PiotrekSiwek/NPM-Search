import React, {FC, useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {Form} from "semantic-ui-react";
import {ValidationMessage} from "../../styles/ComponentStyles";
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";

export const Search: FC = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState(false);
    const {t, i18n} = useTranslation();
    const {handleSearch} = useContext(SearchedPackageContext);
    const history = useHistory();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setName(e.target.value);
    }

    const handleClick = ():void =>{
        if(name.length<1){
            setMessage(true);
            return
        }
        handleSearch(name);
        setName("");
        history.push("/results");
        setMessage(false);
    }

    return (
        <div>
            <Form>
                <Form.Input
                    placeholder={t("placeholder")}
                    value={name}
                    onChange={handleChange}
                    focus
                />
                {message &&
                <ValidationMessage>{t("message")}</ValidationMessage>
                }
                <Form.Button
                    content={t("search")}
                    color={"blue"}
                    onClick={handleClick}/>
            </Form>
        </div>
    )
}
export default Search

