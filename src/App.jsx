import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/login';
import SignupForm from './Components/Signup';
import Dashboard from './Components/Dashboard';
import LandingPage from './Components/landingPage';

function App() {
    return (
        // <Router>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/Login" element={<LoginForm/>} />
              <Route path="/Signup" element={<SignupForm/>} />
              <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
        // </Router>
    );
}

export default App;
