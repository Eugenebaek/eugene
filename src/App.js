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
import migraRegular from "./assets/fonts/Migra-Regular.otf"

const migra = {
    fontFamily: 'Migra',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Migra'),
    local('Migra-Regular'),
    url(${migraRegular}) format('otf')
  `,
};

const theme = createTheme({
    palette: {
        background: {
            default: '#032329',
        }
    },
    typography: {
        fontFamily: migraRegular,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [migra],
            }
        }
    }
})


function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={classes.root}>
                    <Navbar/>
                    <Intro/>
                    <About/>
                    <Experience/>
                    <Portfolio/>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
