import {makeStyles} from "@material-ui/core/styles";
import noise from './assets/images/noise.png';

export default makeStyles({
    noise: {
        width: '100%',
        height: '100%',
        left: '0px',
        top: '0px',
        backgroundImage: `url(${noise})`,
        position: 'fixed',
        backgroundRepeat: 'repeat',
    },
});