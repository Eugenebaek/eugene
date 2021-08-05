import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    topLeft: {
        position: 'fixed',
        top: '40px',
        left: '40px',
    },
    topRight: {
        position: 'fixed',
        top: '40px',
        right: '40px',
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
},
    bottomLeft: {
        position: 'fixed',
        bottom: '40px',
        left: '40px',
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
    },
    bottomRight: {
        position: 'fixed',
        bottom: '40px',
        right: '40px',
    },
});