import { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "antd/dist/antd.min.css";

import MyTeam from "./components/my_team/MyTeam";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";
import './styles/buttonStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastContainerStyle.css';
import HeroCreation from "./components/hero_creation/HeroCreation";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    let navigate = useNavigate();

    const redirectToRegister = () => {
        navigate('/register');
    }

    const redirectToLogin = () => {
        navigate('/login');
    }

    const redirectToMyTeam = () => {
        navigate('/my-team');
    }

    const redirectToRecruitment = () => {
        navigate('/recruitment');
    }

    const redirectToCreation = () => {
        navigate('/creation');
    }

  return (
        <div className="App">
            <button className='button' style={{ backgroundColor: "lightblue" }} onClick={redirectToRegister}>Register</button>
            <button className='button' style={{ backgroundColor: "lightsalmon" }} onClick={redirectToLogin}>Login</button>
            <button className='button' onClick={redirectToMyTeam}>Team</button>
            <button className='button' onClick={redirectToRecruitment}>Recruitment</button>
            <button className='button' onClick={redirectToCreation}>Create hero</button>
            <ToastContainer />
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/login' />
                <Route path='/my-team' element={<MyTeam teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/recruitment' element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/creation' element={<HeroCreation />} />
            </Routes>
        </div>
  );
}

export default App;
