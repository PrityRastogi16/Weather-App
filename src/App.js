import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const apiKey = "e7035cb162b589d3fb932fa5650cf000"
  const [city , setCity] = useState("")
  const[data, setData] = useState({})

  const getWeatherDetail = (cityName) =>{
    if(!cityName) return;
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apiKey
    axios.get(apiURL).then((res) =>{
      console.log("response" , res.data)

      setData(res.data)
    }).catch((err) =>{
      console.log("err" , err)
    })
  }
  
  const handleChangeInput = (e) => {
    setCity(e.target.value)
  }


  const handleSearch = ()=>{
    getWeatherDetail(city)
  }

  useEffect(() =>{
    getWeatherDetail("delhi")
  },[])
  return (
  <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">Weather App</h1>
    
    <div className="d-grid gap-4 col-3 mt-3j">
    <input type="text " className="form" onChange={handleChangeInput}/>
      <button className="btn btn-info" type="button" onClick={handleSearch} >Search</button>
      </div>
     
    </div>
    <div className="col-md-12 text-center mt-5">
       <div className="shadow rounded resultBox">
        <img src="https://tse2.mm.bing.net/th?id=OIP.S0UVTDlC2SKNjel2zYhaDgHaF7&pid=Api&P=0&h=180" alt="weather-icon" className="weatherIcon" />
        <h5 className="city">{data?.name}</h5>
        <h6 className="temp">{((data?.main?.temp)-273.15).toFixed(2)} ℃</h6>
       </div>
    </div>
  </div>

  );
}

export default App;
