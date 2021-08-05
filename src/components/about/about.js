import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";

function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.mainTitle}>About</Typography>
        </div>
    );
}

export default About;
