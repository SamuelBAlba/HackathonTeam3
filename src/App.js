import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Nav from "./Components/Nav"

import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Info from "./Pages/Info"
import Petition from "./Pages/Petition"
import FourOFour from "./Pages/FourOFour"
import Team from "./Pages/Team"

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
         <Nav />
      </header>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Info />} />
          <Route path="/" element={<Petition />} />
          <Route path="/" element={<FourOFour />} />
          <Route path="/" element={<Team/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
