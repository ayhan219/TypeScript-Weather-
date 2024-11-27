import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";


type hourlyData ={
    time: string,
    temp:string,
    icon: string,
    desc:string,
  }

interface WeatherContextType {
getLocation:string,
setGetLocation:(getLocation:string)=>(void);
hourly:hourlyData[],
setHourly:(hourly:hourlyData[])=>(void)
activeMenu:string,
setActiveMenu:(activeMenu:string)=>(void); 

}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherProviderProps={
    children:ReactNode;

}

export const WeatherProvider : React.FC<WeatherProviderProps>=({children})=>{
    const [getLocation,setGetLocation] = useState<string>("ankara");
    const [hourly,setHourly] =useState<hourlyData[]>([]);
    const [activeMenu,setActiveMenu] = useState<string>("weather");

    return(
        <WeatherContext.Provider value={{getLocation,setGetLocation,hourly,setHourly,activeMenu,setActiveMenu}}>
            {children}
        </WeatherContext.Provider>
    )

}

export const useWeatherContext =()=>{
    const context =useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeatherContext must be used within a weatherProvider");
    }
    return context;
}