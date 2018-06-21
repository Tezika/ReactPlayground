import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Helper from '../globalHelper';

class Card extends Component {
    static defaultProps = {
        showing: false,
        id: 0,
        color: 'grey'
    };

    static propTypes = {
        id: PropTypes.number.isRequired,
        showing: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const { id, color, showing, onClick } = this.props;
        const cardColor = showing ? color : Helper.Hidden_Color;
        return (
            <div className="card-container" style={{backgroundColor: cardColor}} 
                 onClick={() => onClick(id) }>
            </div>
        );
    }
}

export default Card;