import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Info from "./Pages/Info"
import FourOFour from "./Pages/FourOFour"
import Team from "./Pages/Team"
import LocationDetails from './Components/LocationDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/index/info" element={<Info />} />
            <Route path='/index/location/:borough' element={<LocationDetails/>}/>
            <Route path="/index/team" element={<Team />} />
            <Route path="*" element={<FourOFour />} />

          </Routes>
        </main>

      </Router>
    </div>
  );
}

export default App;
