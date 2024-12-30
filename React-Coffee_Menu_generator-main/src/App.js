import Navbar from './components/Navbar';
import './App.css';
// import Signin from './components/Signin';
import Home from './pages/Home';

import About from './components/About';
import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Footer from './components/Footer';
import Signin from './components/Signin';
import Menu1 from './menupages/menu1';
import Menu2 from './menupages/menu2';
import Menu3 from './menupages/menu3';
import Menu4 from './menupages/menu4';
import Menu5 from './menupages/menu5';
import Menu6 from './menupages/menu6';

import Grid from './components/Grid';
import Allmenu from './components/Allmenu';
import ImageUpload from './components/ImageUpload';
import Menudata from './components/Menudata';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Signin/>} />
        
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Sigin' element={<Signin/>} />
        <Route path='/Menu1' element={<Menu1/>} />
        <Route path='/Menu2' element={<Menu2/>} />
        <Route path='/Menu3' element={<Menu3/>} />
        <Route path='/Menu4' element={<Menu4/>} />
        <Route path='/Menu5' element={<Menu5/>} />
        <Route path='/Menu6' element={<Menu6/>} />

        <Route path='/Grid' element={<Grid/>} />
        <Route path='/Allmenu' element={<Allmenu/>} />
        <Route path='/ImageUpload' element={<ImageUpload/>} />
        <Route path='/Menudata' element={<Menudata/>} />

        
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
