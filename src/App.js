import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from './components/Search';
import Results from './components/Results';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Switch>
          <Route exact path="/:options/:id">
            <Results/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
