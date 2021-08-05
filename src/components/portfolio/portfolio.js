import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";

function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.mainTitle}>Portfolio</Typography>
        </div>
    );
}

export default Portfolio;
