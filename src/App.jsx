import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes, 
  Navigate,
} from 'react-router-dom';

//import logo from '../LOGO.png';
import './styles/main.css';

// import depuis pages 
import Home from "./pages/Home/home";
import Propos from "./pages/Propos/propos";
import FicheLogement from "./pages/FicheLogement/fiche-logement"; 
import PageNotFound from "./pages/PageNotFound/pagenotfound";


function App() {
  return (
    <div>
      <div className="App">
     
        <Router>
          <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<Propos />} />
                <Route path="logements/:logementId" element={<FicheLogement />} />
                <Route path="/kaza" element={<Navigate to="/" replace />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </Router>
      </div>
    </div>
  );
}

export default App;


/* 
*/