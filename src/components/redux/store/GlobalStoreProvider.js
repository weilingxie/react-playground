import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CardListReduer from '../reducers/CardListReduer'

const GlobalStore = createStore(CardListReduer)
const GlobalStoreProvider = (props) => (
    <Provider store = { GlobalStore }>
        {props.children}
    </Provider>
)
export default GlobalStoreProvider