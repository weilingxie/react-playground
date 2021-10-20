import React, { useEffect } from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchCardList from './reducers/fetchCardList'

const CardList = ({ cards, fetchCardList }) => {

    useEffect(async ()=>{
        await fetchCardList();        
        console.log(cards)
    }, [])

    return (
        <div className="card-container container">
            <h1>Redux with Thunk</h1>
            <hr />
            <div className="row">
                {cards&&cards.map(card => (
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
    console.log('mapStateToProps')
    console.log(state.CardListReducer.cards)
    return { 
        cards : state.CardListReducer.cards
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchCardList }, dispatch)

const ConnectedCardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default ConnectedCardList