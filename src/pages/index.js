import React, { useEffect, useState } from 'react';
import './index.css'


const Home = () => {
  const [loading, setLoading] = useState(true);


  const [data, setData] = useState('');
  useEffect(()=>{
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=malang&units=metric&appid=d95e1800f92864a5600b2a4400a3ecac"
  )
    .then((response) => response.json())
    .then((response) =>{
  setData(response)
  setLoading(false)
})
    .catch((err) => alert("No weather found."));
  },[]) 
  console.log(data)

  return (
      <>
        <h1 class="title">City News Report</h1>
        <div class = "isi">
          <div class="row">
            <div class="leftcolumn">
              <div class="cardleft">
                {loading ? <p> Loading </p> : (
                  <> 
                    <div class="leftcolumn">
                      <h2> {data.name} </h2>
                      <h2> {data.main.temp} °C</h2>
                    </div>
                    <div class="rightcolumn">
                      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} style={{width: 'auto' , height: '200px' }}/>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div class="rightcolumn">
              <div class="cardright">
                <h2>Column 2</h2>
                <p>Some text..</p>
              </div>
            </div>
            <div class="leftcolumn">
              <div class="cardleft">
                <h2>Column 3</h2>
                <p>Some text..</p>
              </div>
            </div>
            <div class="rightcolumn">
              <div class="cardright">
                <h2>Column 4</h2>
                <p>Some text..</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <ul class="sponsor">
            <li class="textSponsor">Sponsored by :</li>
            <li><img src="../../public/LogoMalang.png" /></li>
            <li><img src="../../public/UB.png" /></li>
            <li><img src="../../public/FILKOM.png" /></li>
          </ul>
        </div>
      </>
  );
};

export default Home;
