
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './pages/signin/sigin';
import SignUp from './pages/signup/signup';
import SignUpTeaher from './pages/signup-teacher/signup-teacher';
import SignUpStudent from './pages/signup-student/signup-student';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route  path="/signup" component={SignUp}/>
        <Route path="/signup-teacher" component={SignUpTeaher}/>
        <Route path="/signup-student" component={SignUpStudent}/>
      </Switch>
    </Router>
  );
}

export default App;
