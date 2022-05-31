import React, {useState} from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import Home from "./components/home/Home";
import HeroRecruitment from "./components/hero_recruitment/HeroRecruitment";

function App() {
    const [firstMember, setFirstMember] = useState({ name: '' });
    const [secondMember, setSecondMember] = useState({ name: '' });
    const [thirdMember, setThirdMember] = useState({ name: '' });

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
                <Route path='/' element={<Home firstMember={firstMember}
                                               secondMember={secondMember}
                                               thirdMember={thirdMember}
                                               setFirstMember={setFirstMember}
                                               setSecondMember={setSecondMember}
                                               setThirdMember={setThirdMember} />} />
                <Route path='/recruitment' element={<HeroRecruitment firstMember={firstMember}
                                                                     secondMember={secondMember}
                                                                     thirdMember={thirdMember}
                                                                     setFirstMember={setFirstMember}
                                                                     setSecondMember={setSecondMember}
                                                                     setThirdMember={setThirdMember} />} />
            </Routes>
        </div>
  );
}

export default App;
