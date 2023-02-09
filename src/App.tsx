import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
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
import Hero from "./components/Hero";
import RecruitedMember from "./components/my_team/RecruitedMember";
import HomePageImages from "./HomePageImages";

function App() {
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');
    const [teamMembers, setTeamMembers] = useState([]);

    let navigate = useNavigate();
    const location = useLocation()

    const handleLogout = () => {
        if (location.pathname !== '/register') {
            setUserId(0)
            setUserName('')
            navigate("/login")
        }
    }

    const checkAuthentication = () => {
        axios.get("http://localhost:4000/authenticate", {
            withCredentials: true
        })
            .then(res => {
                setUserId(res.data?.id)
                setUserName(res.data?.name)
            })
            .catch(() => handleLogout())
    }

    const logout = () => {
        axios.post('http://localhost:4000/logout', {},{ withCredentials: true })
            .then(() => {
                toast.success("Logout confirmed", { position: toast.POSITION.BOTTOM_RIGHT })
                setUserName("")
                setUserId(0)
                navigate('/login');
            })
            .catch(err => {
                console.log(err)
                toast.error("Error while trying to logout", { position: toast.POSITION.BOTTOM_RIGHT })
            })
    }

    const renderLoggedOptions = () => {
        if (userId) {
            return (
                <>
                    <button style={{ fontSize: 36 }} className='navButton' onClick={() => navigate(`${userId}/my-team`)}>Team</button>
                    <button style={{ fontSize: 36 }} className='navButton' onClick={() => navigate(`${userId}/recruitment`)}>Recruitment</button>
                    <button style={{ fontSize: 36 }} className='navButton' onClick={() => navigate(`${userId}/creation`)}>Create hero</button>
                </>
            )
        }
        return
    }

    useEffect(() => {
        if (location.pathname === '/login' && userName)
            navigate("/recruitment")
        if (location.pathname !== '/register' && location.pathname !== '/login')
            checkAuthentication()
        // eslint-disable-next-line
    },[navigate])

  return (
        <div style={{ textAlign: 'center', margin: 10 }} className="App">
                {!userName && <button className='navButton' style={{ backgroundColor: "lightblue", fontSize: 36 }} onClick={() =>  navigate('/register')}>Register</button>}
                {!userName && <button className='navButton' style={{ backgroundColor: "orange", fontSize: 36 }} onClick={() => navigate('/login')}>Login</button>}
                {userName && <button className='navButton' style={{ backgroundColor: "grey", fontSize: 36 }} onClick={logout}>Logout</button>}
            {renderLoggedOptions()}
            <ToastContainer />
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path={':userId/my-team'} element={<MyTeam />} />
                <Route path={':userId/my-team/:id'} element={<RecruitedMember />} />
                <Route path={':userId/recruitment'} element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path={':userId/creation'} element={<HeroCreation />} />
                <Route path={':userId/recruitment/:id'} element={<Hero />} />
            </Routes>
            <HomePageImages />
        </div>
  );
}

export default App;
