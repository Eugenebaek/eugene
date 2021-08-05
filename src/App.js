import React from "react";
import {CssBaseline} from "@material-ui/core";
import useStyles from "./styles";
import Navbar from './components/navbar/navbar'
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.root}>
                <Navbar/>
                <Intro/>
                <About/>
                <Experience/>
                <Portfolio/>
            </div>
        </React.Fragment>

    );
}

export default App;
