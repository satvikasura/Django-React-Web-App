import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Authentication from "./components/Authentication"

function Logout() {
  localStorage.clear()
  return <Navigate to="/" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Authentication/>
          }
        />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App