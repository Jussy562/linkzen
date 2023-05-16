import { lazy, Suspense } from 'react'
import './App.css'
import './components/hero/hero.css'
import Loader from './components/loader/Loader'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/login"));


function App() {
  

  return (
    <div className='h-full w-full'>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/"  element={
              <Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </Suspense>
      
   
    </div>
  )
}

export default App
