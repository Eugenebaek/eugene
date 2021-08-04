import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import {Typography} from "@material-ui/core";
import useStyles from './styles';

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Typography>Hello World</Typography>
        </AppBar>
    );
}

export default Navbar;
