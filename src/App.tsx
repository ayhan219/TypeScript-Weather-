import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SideBar from "./components/SideBar"
import { WeatherProvider } from "./context/WeatherContext"
function App() {
  

  return (
   <>
   <BrowserRouter>
   <WeatherProvider>
   <Routes>
    <Route path="/" element={<Home />} />
    
   </Routes>
   </WeatherProvider>
   </BrowserRouter>
   </>
  )
}

export default App
