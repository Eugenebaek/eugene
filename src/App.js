import './App.css';
import Navbar from './components/navbar/navbar'
import Intro from "./components/intro/intro";
import useStyles from "./styles";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar/>
            <Intro/>
            <About/>
            <Experience/>
            <Portfolio/>
        </div>

    );
}

export default App;
