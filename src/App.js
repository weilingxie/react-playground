import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardList from './components/redux/CardList'
import GlobalStoreProvider from './components/redux/store/GlobalStoreProvider'
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <Navbar />
        <br />
        <BrowserRouter>
          <Switch>
            <Route path='/redux'>
              <CardList />
            </Route>
          </Switch>
        </BrowserRouter>
        </GlobalStoreProvider>
    </div>
  );
}

export default App;
