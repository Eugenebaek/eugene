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
        color: '#FFF',
        margin: '25px auto 25px auto',
        fontSize: '8rem',
    },

    subTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '2.85rem',
    },

    italicize: {
        fontStyle: 'italic',
    },

    star: {
        verticalAlign: 'middle',
    }

});