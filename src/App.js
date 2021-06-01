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
import Settings from './pages/settings/settings';
import ChangePassword from './pages/changePassword/changePassword';
import 'antd/dist/antd.css';

function App() {
    return ( < Switch >

        <
        Route path = "/login"
        component = { SignIn }
        /> <
        Route path = "/signup"
        component = { SignUp }
        /> <
        Route path = "/signup-teacher"
        component = { SignUpTeaher }
        /> <
        Route path = "/signup-student"
        component = { SignUpStudent }
        /> <
        PrivateRoute  path = {["/home","/home/:id"]}
        component = { Home }
        /> <
        PrivateRoute path = "/settings"
        component = { Settings }
        /> <
        PrivateRoute path = "/change-password"
        component = { ChangePassword }
        />    </Switch >

    );
}

export default App;