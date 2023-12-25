import {Routes, Route} from 'react-router-dom'

import Header from './components/Header.js'
import Home from './pages/Home.js'
import './css/app.css'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
