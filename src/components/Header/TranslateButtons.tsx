import React from "react";

import i18n from "i18next";
import {Button, Flag} from "semantic-ui-react";

const changeLanguages = (ln:string) => {
    return () => {
        i18n.changeLanguage(ln)
    }
}

const TranslateButtons:React.FC = () => {

    return(
        <Button.Group>
            <Button icon={"chevron circle down"} size={"large"} primary
                    onClick={changeLanguages("en")}>
                <Flag name='gb'/>
            </Button>
            <Button size={"large"} color={"yellow"} onClick={changeLanguages("pl")}>
                <Flag name='pl'/>
            </Button>
        </Button.Group>
    )
}

export default TranslateButtons;