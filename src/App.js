//turnery operator is working but if else not


import React, { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [apiData, setApiData] = useState(null)
  const [input, setInput] = useState("")

  useEffect(() => {

    async function myFunction() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=23023689f754c758f5fdb16bd8fb4041`);

        const JsonData = await response.json()
        const main = await JsonData.main
        // console.log(await JsonData);
        setApiData(await main)

      } catch (error) {
        console.log(error);
      }

    }

    myFunction()

  }, [input])



  // console.log(apiData.weather[0].description);
  return (
    <>
      <div className="maincontainer">

        <div className="container">
          <div className="head">
            <input type="search"
              className="inputField" 
              placeholder="Enter City Name"
              value={input} onChange={(e)=>setInput(e.target.value) }/>
          </div>

          {
            !apiData ? (<p>Data not found</p>) :
              (
                <>
                  <div className="info">
                    <h1>{input}</h1>
                    <h2>{`${apiData.temp}`}</h2>
                    <p>{`Humidity: ${apiData.humidity} %`}</p>
                    <p>{`Pressure: ${apiData.pressure} mbar`}</p>
                  </div>
                </>)
          }




        </div>


      </div>


    </>
  )



}

export default App;