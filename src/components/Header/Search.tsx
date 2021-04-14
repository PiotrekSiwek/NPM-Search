import React, {FC, useContext, useState} from "react";
import {Form} from "semantic-ui-react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {SearchedPackageContext} from "../../contexts/SearchedPackageContext";

export const Search: FC = () => {

    const [name, setName] = useState("");
    const {t, i18n} = useTranslation();
    const {handleSearch} = useContext(SearchedPackageContext);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setName(e.target.value);
    }

    const handleClick = ():void =>{
        handleSearch(name);
    }

    return (
        <div>
            <Form>
                <Form.Input
                    placeholder="package name..."
                    value={name}
                    onChange={handleChange}
                    focus
                />
                <Link to="/results">
                <Form.Button
                    content={t("search")}
                    color={"blue"}
                    onClick={handleClick}/>
                </Link>
            </Form>
        </div>
    )
}
export default Search

