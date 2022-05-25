import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./home/Home";
import HeroRecruitment from "./hero_recruitment/HeroRecruitment";

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recruitment' element={<HeroRecruitment />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
