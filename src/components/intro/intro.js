import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";

function Intro() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.mainTitle}>Eugene Baek</Typography>
        </div>
    );
}

export default Intro;
