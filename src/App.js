import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
          <Route path="/index" element={<Index />} />
          <Route path="/index/info" element={<Info />} />
          <Route path="/index/petition" element={<Petition />} />
          <Route path="/index/team" element={<Team/>} />
          <Route path="*" element={<FourOFour />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
