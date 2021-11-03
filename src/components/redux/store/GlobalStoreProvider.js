import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import CardListReducer from '../reducers/CardListReduer'
import fetchCardList from '../reducers/fetchCardList'

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