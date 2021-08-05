import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";

function Experience() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.mainTitle}>Experience</Typography>
        </div>
    );
}

export default Experience;
