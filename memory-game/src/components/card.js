import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Helper from '../globalHelper'

class Card extends Component {
    static defaultProps = {
        state: 0,
        id: 0,
        color: 'grey'
    };

    static propTypes = {
        id: PropTypes.number.isRequired,
        state: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const { id, color, state, onClick } = this.props;
        const cardColor = state === 0 ? Helper.Hidden_Color : color
        return (
            <div style={{
                width:'128px', 
                height:'128px', 
                margin: '16px', 
                backgroundColor: cardColor
            }} onClick={() => state === 0? onClick(id):null}>
            </div>
        );
    }

    fadeIn() {

    }

    fadeOut() {

    }
}

export default Card;