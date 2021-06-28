import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaApi] = useState('https://api.nasa.gov/planetary/apod?api_key=0DphGOr4UI9FSOtkhXg6XzG4nLpNLuS45FwxrEvb')
  const [apiInfo, setApiInfo] = useState([])
  useEffect(() => {
    axios.get(nasaApi)
    .then((keyInfo) => {
      setApiInfo(keyInfo.data)
    })
  },[])
  console.log(apiInfo.date)
  return (
    <div className="App">
      <h2>Today is {apiInfo.date}</h2>
      <h1>{apiInfo.title}</h1>
      <img src={apiInfo.url} />
      <p>{apiInfo.explanation}</p>
      <footer>Copywrite: {apiInfo.copyright}</footer>
    </div>
  );
}

export default App;
{/*  below is all the data from the api key sorted for visual reference
{"copyright":"Wang LetianEyes at Night",
"date":"2021-06-28",
"explanation":"It may look like a paper Moon.  Sailing past a  canvas Sun.  But those are not cardboard clouds.  And it's not make believe.\u00a0 The featured picture of an orange colored sky is real -- a digital composite of two exposures of the solar eclipse that occurred earlier this month.  The first exposure was taken with a regular telescope that captured an overexposed Sun and an underexposed Moon, while the second image was taken with a solar telescope that captured details of the chromosphere of the background Sun. The Sun's canvas-like texture was brought up by imaging in a very specific shade of red emitted by hydrogen.  Several prominences can be seen around the Sun's edge.  The image was captured just before sunset from Xilingol, Inner Mongolia, China. It's also not make-believe to imagine that the Moon is made of dense rock, the Sun is made of hot gas, and clouds are made of floating droplets of water and ice.",
"hdurl":"https://apod.nasa.gov/apod/image/2106/PaperMoonSolarEclipse_Letian_3000.jpg",
"media_type":"image",
"service_version":"v1",
"title":"A Paper Moon Solar Eclipse",
"url":"https://apod.nasa.gov/apod/image/2106/PaperMoonSolarEclipse_Letian_960.jpg"} 
*/}