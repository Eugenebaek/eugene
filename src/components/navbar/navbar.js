import React from 'react';
import {Link} from "@material-ui/core";
import useStyles from './styles';

function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <Link className={classes.topLeft}>Home</Link>
            <Link className={classes.topRight}>About</Link>
            <Link className={classes.bottomLeft}>Experience</Link>
            <Link className={classes.bottomRight}>Portfolio</Link>
        </div>
    );
}

export default Navbar;
