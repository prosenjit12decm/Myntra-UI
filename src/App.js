import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Male from './Components/Male';
import Kids from './Components/Kids';
import Female from './Components/Female';
import HomeLives from './Components/HomeLives';
import Product from './Components/Product';



function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/male" element={<Male/>}></Route>
          <Route path="/female" element={<Female/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/homeLives" element={<HomeLives/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

