import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from './pages/About';
import { Home } from './pages/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootswatch/dist/lux/bootstrap.min.css';
function App() {
  return (
    <div className="App">

    <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <Link className="navbar-brand" to="/">JATA Fashion</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                </ul>
                <div className="input-group mx-3">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append mx-3">
                    <button className="btn btn-outline-light" type="submit">Search</button>
                  </div>
                </div>
                <div className="justify-content-end"> {/* Move this div to the right */}
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                       {/* Check Authentication to whether show login or my profile */}
                      <Link className="nav-link" to="/login">Login</Link>
                      {/* <Link className="nav-link" to="/login">My Profile</Link> */}

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
);
}

export default App;
