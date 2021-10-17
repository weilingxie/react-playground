const initialState = {
    cards: [
        {
            title:'title1', 
            urlToImage:'https://picsum.photos/id/237/200/300'
        },
        {
            title:'title2', 
            urlToImage:'https://picsum.photos/id/238/200/300'
        },
        {
            title:'title3', 
            urlToImage:'https://picsum.photos/id/239/200/300'
        },
    ]
}

const CardListReduer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDLIST':
            return {
                cards: state.cards
            }
        default:
            break        
    }
    return state
}

export default CardListReduer