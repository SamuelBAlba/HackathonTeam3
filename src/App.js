import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav"

import Home from "./Pages/Home"
import Location from "./Pages/Location"
import Info from "./Pages/Info"
import Petition from "./Petition"
import Error from "./Pages/Error"
import Team from "./Pages/Team"

function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Location/>} />
          <Route path="/" element={<Info />} />
          <Route path="/" element={<Petition />} />
          <Route path="/" element={<Error />} />
          <Route path="/" element={<Team />} />

        </Routes>

      </main>
     </Router>
    </div>
  );
}

export default App;
