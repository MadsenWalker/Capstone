
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
// import logo from './logo.svg';

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Reading from './pages/Reading'
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const {userId} = useContext(AuthContext)
  console.log(userId)
  return (
    <div>
      <Header/>
     
      <Routes>
  <Route path="/" element={userId ? <Navigate to="/home" /> : <Home />} />
  <Route path="/home" element={<Home />} />
  <Route
    path="/dashboard"
    element={userId ? <Dashboard /> : <Navigate to="/" />}
  />
  <Route
    path="/reading"
    element={userId ? <Reading /> : <Navigate to="/" />}
  />
</Routes>
    <Footer/>
    
</div>
)
}

export default App