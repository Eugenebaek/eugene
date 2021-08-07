import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 5fr 1fr',
        gridTemplateRows: '4fr 3fr 1fr 4fr',
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainTitle: {
        textAlign: 'center',
        gridColumnStart: '2',
        gridRowStart: '2',
        // borderStyle: 'solid',
        color: '#fff',
        fontSize: '136px',
    },

    subTitle: {
        gridColumnStart: '2',
        gridRowStart: '3',
        // borderStyle: 'solid',
        color: '#fff',
        fontSize: '30px',
        textAlign: 'center',
    },

    star: {
    }

});