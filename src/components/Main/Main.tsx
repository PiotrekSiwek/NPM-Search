import React, {FC} from "react";
import {Route} from "react-router-dom";
import Intro from "./Intro";
import SearchResults from "./Searchresults";

const Main: FC = () => {
    return (
        <>
          <Route path="/" exact component={Intro} />
          <Route path="/results" component={SearchResults} />
        </>
    )
}
export default Main;