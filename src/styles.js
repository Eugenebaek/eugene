import {makeStyles} from "@material-ui/core/styles";
import noise from './assets/noise.png';

export default makeStyles({
    root: {
        width: '100%',
        left: '0px',
        top: '0px',
        backgroundImage: `url(${noise})`,
        position: 'absolute',
        backgroundRepeat: 'repeat',
    },
});