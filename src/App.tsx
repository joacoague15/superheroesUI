import { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Home from "./components/home/Home";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";
import './styles/buttonStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastContainerStyle.css';

function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    }

    const redirectToRecruitment = () => {
        navigate('/recruitment');
    }

  return (
        <div className="App">
            <button className='button' onClick={redirectToHome}>Team</button>
            <button className='button' onClick={redirectToRecruitment}>Recruitment</button>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/recruitment' element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
            </Routes>
        </div>
  );
}

export default App;
