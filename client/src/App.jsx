import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import Signin from "./pages/Signin"
import Signout from "./pages/Signout"
import Header from "./components/Header"
import Signup from "./pages/Signup"

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Account" element={<Account />} />
  <Route path="/Signin" element={<Signin />} />
  <Route path="/Signout" element={<Signout />} />
  <Route path="/Signup" element={<Signup />} />

  </Routes>
  
  </BrowserRouter>
}
