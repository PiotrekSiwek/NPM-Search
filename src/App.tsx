import React from 'react';
import Header from "./components/Header/NpmHeader";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import SearchedPackageProvider from "./contexts/SearchedPackageContext";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <SearchedPackageProvider>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </HashRouter>
            </QueryClientProvider>
        </SearchedPackageProvider>
    );
}

export default App;
