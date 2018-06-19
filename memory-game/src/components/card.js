import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Helper from '../globalHelper'


// 0 - hide
// 1 - fade
// 2 - display

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
        const cardColor = state === 0 ? Helper.Hidden_Color : color;
        return (
            <div className="card-container" style={{
                    backgroundColor: cardColor
            }} onClick={() => state === 0? onClick(id):null}>
            </div>
        );
    }
}

export default Card;