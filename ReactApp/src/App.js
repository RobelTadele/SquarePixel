import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import Portfolio from './Pages/Portfolio';
import SamsCollection from './Pages/SamsCollection';
import Authentication from './Pages/Authentication';
import ConsumeAPI from './Pages/ConsumeAPI';

export function App() {
  return (
    <Routes>
      <Route path='' element = {<Home />}></Route>
      <Route path='/portfolio' element = {<Portfolio />}></Route>
      <Route path='/Sams-Collection' element = {<SamsCollection />}></Route>
      <Route path='/upload' element = {<Authentication />}></Route>
      <Route path='/api' element = {<ConsumeAPI />}></Route>

    </Routes>
  );
}
export default App;