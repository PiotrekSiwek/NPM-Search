import React from 'react';
import Header from "./components/Header/NpmHeader";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";
import SearchedPackageProvider from "./contexts/SearchedPackageContext";

const App = () => {
    return (
        <SearchedPackageProvider>
                <HashRouter>
                    <Header/>
                    <Main/>
                    <Footer/>
                </HashRouter>
        </SearchedPackageProvider>
    );
}

export default App;
