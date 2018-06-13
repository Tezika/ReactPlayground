import React, {Component} from 'react';
import './nav.css';

class Nav extends Component{
    render(){
        return (
            <header>
                <h3><a>React</a></h3>
                <nav>
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact us</a></li>
                </nav>
            </header>
        );
    }
}

export default Nav;