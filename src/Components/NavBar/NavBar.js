import React, { Component } from 'react';
import classes from './NavBar.module.css';

export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const p = this.props
        return(
            <div className={classes.navBar}>
                <li>{p.title}</li>
            </div>
        )
    }
}