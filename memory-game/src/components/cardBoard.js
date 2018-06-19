import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cardBoard.css';
import Card from './card';

class CardBoard extends Component {
    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClick: PropTypes.func.isRequired
    }

    render() {
        const cards = this.props.cards.map((c) => {
            return <Card key={c.id} {...c} onClick={this.props.onClick} />
        });
        return (
            <div>
                <div className="card-board">
                    {cards}
                </div>
            </div>
        );
    }
}

export default CardBoard;
