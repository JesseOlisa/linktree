import Home from './page/Home'
import Contact from './page/components/Contact'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    )
}

export default App
