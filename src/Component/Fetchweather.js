import react, { useEffect, useState } from "react";
import "./Css/Style.css"

const Fetchweather= () =>{

    const [city, setCity] = useState(null);
    const [Search, setSearch] = useState('Karachi')

    useEffect (()=>{
        const fetchApi = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=7224acc6d841cc8fda4fb994decd2491&units=metric`
        const response = await fetch(url);
        const resJson = await response.json()
        setCity(resJson.main)
        console.log(resJson.main)
        }
        fetchApi()
    },[Search])

    return(
        <div className="main">
            <div className="box">
                <div className="srch">

                    <input type="search" className="search" onChange = {(Event)=>{
                        setSearch(Event.target.value)
                    }}/>

                    {!city ? (
                        <p>No Record Found</p>
                    ):(
                    <div className="info">
                        <h2 className="Location">
                            <i className="fas fa-street-view"></i>{Search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}
                        </h1>
                        <h3 className="temp_min_max">
                            Min : {city.temp_min} Cel | Max : {city.temp_max} Cel
                        </h3>
                    </div>     
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default Fetchweather;