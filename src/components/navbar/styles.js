import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    topLeft: {
        position: 'fixed',
        top: '88px',
        left: '88px',
    },
    topRight: {
        position: 'fixed',
        top: '88px',
        right: '88px',
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
},
    bottomLeft: {
        position: 'fixed',
        bottom: '88px',
        left: '88px',
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
    },
    bottomRight: {
        position: 'fixed',
        bottom: '88px',
        right: '88px',
    },
});