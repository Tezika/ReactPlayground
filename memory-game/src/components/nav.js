import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nav.css';

class Nav extends Component {
    static defaultProps = {
        onNewGame() {}
    }

    static propTypes = {
        onNewGame: PropTypes.func.isRequired
    }

    render() {
        return (
            <header>
                <h3><a>Memory Game</a></h3>
                <nav>
                    <li><a onClick={this.props.onNewGame}>New Game</a></li>
                </nav>
            </header>
        );
    }
}

export default Nav;