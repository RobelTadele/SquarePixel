
import './App.css';

import {Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import Portfolio from './Pages/Portfolio';
import SamsCollection from './Pages/SamsCollection';
import Uploads from './Pages/GalleryTest';
import Uploaditem from './Pages/uploaditem';


export function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/portfolio' element = {<Portfolio />}></Route>
      <Route path='/Sams-Collection' element = {<SamsCollection />}></Route>
      <Route path='/upload' element = {<Uploads />}></Route>
      <Route path='/uploaditem' element = {<Uploaditem />}></Route>

    </Routes>
  );
}

export default App;

