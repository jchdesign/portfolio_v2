import {HashRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

import about_data from './data/about_data';

import Home from './pages/Home';
import About from './pages/About';
import MultiSim_SimManager from './pages/MultiSim_SimManager';
import Nearby from './pages/Nearby';
import Reflection from './pages/Reflection';
import Recollections from './pages/Recollections';
import OniriaHill from './pages/OniriaHill';
import DirtyLaundry from './pages/DirtyLaundry';
import Interlude from './pages/Interlude';
import BrightSide from './pages/BrightSide';
import Design from './pages/Design';
import Film from './pages/Film'

console.log('Reflection:', Reflection); // Add this

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About data={about_data}/>}></Route>
        <Route path='/Design' element={<Design/>}></Route>
        <Route path='/Film' element={<Film/>}></Route>

        <Route path='/MultiSim_SimManager' element={<MultiSim_SimManager/>}></Route>
        <Route path='/Nearby' element={<Nearby/>}></Route>
        <Route path='/Reflection' element={<Reflection/>}></Route>
        <Route path='/Interlude' element={<Interlude/>}></Route>

        <Route path='/OniriaHill' element={<OniriaHill/>}></Route>
        <Route path='/DirtyLaundry' element={<DirtyLaundry/>}></Route>
        <Route path='/BrightSide' element={<BrightSide/>}></Route>

        <Route path='/Recollections' element={<Recollections/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
