import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CardList from './components/redux/CardList'
import Lifecycle from './components/lifecycle/Lifecycle'
import GlobalStoreProvider from './components/redux/store/GlobalStoreProvider'
import './App.css'

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar />
          <br />
          <Switch>
            <Route path="/redux">
              <CardList />
            </Route>
            <Route path="/lifecycle">
              <Lifecycle />
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  )
}

export default App
