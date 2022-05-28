import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import './navigator1.css'
import GoForward from './ GoForward';
import GoBack from './GoBack';

class Navigator1 extends Component {
    render() {
        return (
            <div>
                <GoBack />
                <GoForward />
                <hr />
                <button><NavLink to='contentA'>Go to A</NavLink></button>
                <button><NavLink to='contentB/*'>Go to B</NavLink></button>
            </div>
        );
    }
}

export default Navigator1;