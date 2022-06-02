import React, {useState} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import Home from "./components/home/Home";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";

function App() {
    const [teamMembers, setTeamMembers] = useState([{ name: '' }, { name: '' }, { name: '' }]);

    let navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    }

    const redirectToRecruitment = () => {
        navigate('/recruitment');
    }

  return (
        <div className="App">
            <button onClick={redirectToHome}>Home</button>
            <button onClick={redirectToRecruitment}>Recruitment</button>
            <Routes>
                <Route path='/' element={<Home teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
                <Route path='/recruitment' element={<HeroRecruitment teamMembers={teamMembers} setTeamMembers={setTeamMembers} />} />
            </Routes>
        </div>
  );
}

export default App;
