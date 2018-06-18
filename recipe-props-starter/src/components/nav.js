import React, { Component } from 'react';
import './nav.css';
import PropTypes from 'prop-types'

class Nav extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    
    render() {
        return (
            <header>
                <h3><a>React</a></h3>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact us</a></li>
                </nav>
            </header>
        );
    }
}

export default Nav;