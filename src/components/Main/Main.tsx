import React, {FC} from "react";
import {Route} from "react-router-dom";
import Intro from "./Intro";
import SearchResults from "./Searchresults";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

const Main: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
          <Route path="/" exact component={Intro} />
          <Route path="/results" component={SearchResults} />
        </QueryClientProvider>
    )
}
export default Main;