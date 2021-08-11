import React from 'react';
import useStyles from './styles';
import {Typography} from "@material-ui/core";
import profile from '../../assets/images/profile.png';

function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.pageTitle}>About</Typography>
            <Typography variant={'body1'} className={classes.aboutBody}>I'm a Computer Engineer at the University of
                Waterloo.

                In my first year, I had the opportunity to work at Fidelity Canada as an Automation Specialist. As part
                of the Quality Assurance team, I was tasked to write automation scripts in Groovy andJava to verify the
                functionality of various webpage components and database interactions.

                My passions are in game development and machine learning.

                Some of my hobbies include Hockey, League of Legends, and Photography. I am currently a Silver 4
                Katarina main.</Typography>
            <img className={classes.imgProfile} src={profile}/>
        </div>
    );
}

export default About;
