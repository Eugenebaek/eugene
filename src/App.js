import React from "react";
import {CssBaseline} from "@material-ui/core";
import useStyles from "./styles";
import Navbar from './components/navbar/navbar'
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import {createTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createTheme({
    palette: {
        background: {
            default: '#0F0F11',
        }
    },
    typography: {},
    overrides: {}
})


function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar/>
                <Intro/>
                <About/>
                <Experience/>
                <Portfolio/>
            </ThemeProvider>
            <div className={classes.noise}/>
        </React.Fragment>
    );
}

export default App;
