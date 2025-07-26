import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import Projects from './pages/projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
