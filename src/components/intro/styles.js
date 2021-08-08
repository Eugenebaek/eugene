import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

    mainTitle: {
        gridColumnStart: '2',
        gridRowStart: '2',
        // borderStyle: 'solid',
        color: '#FFF',
        margin: '25px auto 25px auto',
    },

    subTitle: {
        gridColumnStart: '2',
        gridRowStart: '3',
        // borderStyle: 'solid',
        color: '#fff',
        textAlign: 'center',
    },

    italicize: {
        fontStyle: 'italic',
    },

    star: {
        verticalAlign: 'middle',
    }

});