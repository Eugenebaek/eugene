import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 2fr 1fr',
        gridTemplateRows: '2fr 5fr 1fr',
        height: '100vh',
        columnGap: '100px',
    },

    pageTitle: {
        color: '#FFF',
        fontSize: '8rem',
        gridColumnStart: '2',
        gridRowStart: '1',
    },

    aboutBody: {
        color: '#FFF',
        fontSize: '20px',
        gridColumnStart: '2',
        gridRowStart: '2',
    },

    imgProfile: {
        gridColumnStart: '3',
        gridRowStart: '2',
        height: '400px',

    },
});