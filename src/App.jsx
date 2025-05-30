import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Members from './pages/Members';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/member' element={<Members/>}/>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
