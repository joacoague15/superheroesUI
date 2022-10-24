import {useEffect, useState} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import "antd/dist/antd.min.css";

import MyTeam from "./components/my_team/MyTeam";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";
import './styles/buttonStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastContainerStyle.css';
import HeroCreation from "./components/hero_creation/HeroCreation";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

function App() {
    const [userName, setUserName] = useState('');
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

    const logout = () => {
        axios.post('http://localhost:4000/logout', {},{ withCredentials: true })
            .then(() => {
                toast.success("Logout confirmed", { position: toast.POSITION.BOTTOM_RIGHT })
                setUserName("")
                navigate('/login');
            })
            .catch(err => {
                console.log(err)
                toast.error("Error while trying to logout", { position: toast.POSITION.BOTTOM_RIGHT })
            })
    }

    useEffect(() => {
        axios.get("http://localhost:4000/authenticate", {
            withCredentials: true
        })
            .then(res => setUserName(res.data?.name))
    })

  return (
        <div className="App">
            {!userName && <button className='button' style={{ backgroundColor: "lightblue" }} onClick={redirectToRegister}>Register</button>}
            {!userName && <button className='button' style={{ backgroundColor: "lightsalmon" }} onClick={redirectToLogin}>Login</button>}
            {userName && <button className='button' style={{ backgroundColor: "grey" }} onClick={logout}>Logout</button>}
            <button className='button' onClick={redirectToMyTeam}>Team</button>
            <button className='button' onClick={redirectToRecruitment}>Recruitment</button>
            <button className='button' onClick={redirectToCreation}>Create hero</button>
            <ToastContainer />
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/my-team' element={<MyTeam teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/recruitment' element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/creation' element={<HeroCreation />} />
            </Routes>
        </div>
  );
}

export default App;
