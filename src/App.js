import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './pages/signin/sigin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <SignIn/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
