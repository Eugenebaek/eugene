import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";
import star from '../../assets/images/star-persimmon-vector.svg';

function Intro() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.mainTitle}>Eug<span className={classes.italicize}>ene</span> <img className={classes.star} src={star}/> B<span className={classes.italicize}>ae</span>k</Typography>
            <Typography className={classes.subTitle}>Computer Engineer @ University of Waterloo</Typography>
        </div>
    );
}

export default Intro;
