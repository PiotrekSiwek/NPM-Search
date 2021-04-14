import React from "react";
import {useTranslation} from "react-i18next";
import TranslateButtons from "./TranslateButtons";
import Search from "./Search";
import {Container, Header, Icon,Segment} from "semantic-ui-react";
import {IconWrapper, FormWrapper} from "../../styles/ComponentStyles";

const NpmHeader = () => {

    const {t, i18n} = useTranslation();

    return (
        <Segment color={"black"} inverted>
            <Container>
                <Header as={"h4"} textAlign={"right"}>
                    <TranslateButtons/>
                </Header>
                <Icon color={"yellow"} name={"npm"} size={"huge"}/>
                <Header as={"h1"} textAlign={"center"} color={"blue"}>
                    {t("title")}
                </Header>
                <Header as={"h3"} textAlign={"center"} color={"yellow"}>
                    {t("description")}
                </Header>
                <IconWrapper>
                <Icon color="yellow" size="large" name="arrow alternate circle down outline"/>
                </IconWrapper>
                <FormWrapper>
                <Search/>
                </FormWrapper>
            </Container>
        </Segment>

    )
}

export default NpmHeader;