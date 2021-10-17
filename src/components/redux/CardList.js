import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GetCardList } from './actions/CardActions'

const CardList = ({ cards }) => {
    return (
        <div className="container">
            <h1>Redux with Thunk</h1>
            <hr />
            <div className="row">
                {cards.map(card => (
                    <Card key={card.title} title = {card.title} urlToImage={card.urlToImage} />
                ))}
            </div>
        </div>
    )
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        urlToImage: PropTypes.string
    }))
}

const mapStateToProps = (state) => { 
    return { 
        cards : state.cards 
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ GetCardList }, dispatch)

const ConnectedCardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default ConnectedCardList