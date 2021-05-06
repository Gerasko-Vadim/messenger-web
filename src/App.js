
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import SignUpTeaher from './pages/signup-teacher/signup-teacher';
import SignUpStudent from './pages/signup-student/signup-student';
import Home from './pages/home/home';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
      <Switch>
        <Route exact path="/login" component={SignIn}/>
        <Route  path="/signup" component={SignUp}/>
        <Route path="/signup-teacher" component={SignUpTeaher}/>
        <Route path="/signup-student" component={SignUpStudent}/>
        <PrivateRoute path="/" 
          component={Home} 
        />
      </Switch>
  );
}

export default App;
