import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import CardListReducer from '../reducers/CardListReduer'
import fetchCardList from '../reducers/fetchCardList'

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

const GlobalStore = createStore(combineReducers({ 
    fetchCardList, 
    CardListReducer 
}), 
applyMiddleware(thunk))

const GlobalStoreProvider = (props) => (
    <Provider store = { GlobalStore }>
        {props.children}
    </Provider>
)
export default GlobalStoreProvider