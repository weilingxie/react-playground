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
        case 'FETCH_CARDLIST_BEGIN':
            console.log('FETCH_CARDLIST_BEGIN')            
            return {
                ...state,
                fetchPending: true,
                fetchError: null,
            }
        case 'FETCH_CARDLIST_SUCCESS':
            console.log('FETCH_CARDLIST_SUCCESS')
            console.log(state)
            console.log(action)
            return {
                ...state,
                cards: action.data.cards,
                fetchPending: false,
            }
        case 'FETCH_CARDLIST_FAILURE':         
            console.log('FETCH_CARDLIST_FAILURE')   
            return {
                ...state,
                fetchPending: false,
                fetchError: action.data.error,
            }
        default:
            console.log('DEFAULT')
            return state
    }
}

export default CardListReduer