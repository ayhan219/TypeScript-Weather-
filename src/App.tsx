import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SideBar from "./components/SideBar"
import { WeatherProvider } from "./context/WeatherContext"
import Cities from "./pages/Cities"
import Map from "./pages/Map"
function App() {
  

  return (
   <>
   <BrowserRouter>
   <WeatherProvider>
    <SideBar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cities" element={<Cities />} />
    <Route path="/map" element={<Map />} />
    
   </Routes>
   </WeatherProvider>
   </BrowserRouter>
   </>
  )
}

export default App
