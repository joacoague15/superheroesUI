import { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Home from "./components/home/Home";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";
import './styles/buttonStyle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastContainerStyle.css';
import HeroCreation from "./components/hero_creation/HeroCreation";

function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    }

    const redirectToRecruitment = () => {
        navigate('/recruitment');
    }

    const redirectToCreation = () => {
        navigate('/creation');
    }

  return (
        <div className="App">
            <button className='button' onClick={redirectToHome}>Team</button>
            <button className='button' onClick={redirectToRecruitment}>Recruitment</button>
            <button className='button' onClick={redirectToCreation}>Create hero</button>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Home teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/recruitment' element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/creation' element={<HeroCreation />} />
            </Routes>
        </div>
  );
}

export default App;
