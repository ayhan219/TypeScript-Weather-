import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";


interface WeatherContextType {
getLocation:string,
setGetLocation:(getLocation:string)=>(void);
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherProviderProps={
    children:ReactNode;

}

export const WeatherProvider : React.FC<WeatherProviderProps>=({children})=>{
    const [getLocation,setGetLocation] = useState<string>("");

    return(
        <WeatherContext.Provider value={{getLocation,setGetLocation}}>
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