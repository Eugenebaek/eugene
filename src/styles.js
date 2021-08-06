import {makeStyles} from "@material-ui/core/styles";
import noise from './assets/noise.png';

export default makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${noise})`,
        position: 'absolute',
        backgroundRepeat: 'repeat',
        left: '0px',
        top: '0px',
        pointerEvents: 'none',
        zIndex: '999',
    },
});