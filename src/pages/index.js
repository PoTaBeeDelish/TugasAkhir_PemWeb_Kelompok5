import React, { useEffect, useState } from 'react';
import './index.css';
import axios from "axios";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState('');
  const [users, setUsers] = useState('');
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
    console.log(users[0]);
  };

  useEffect(()=>{
    getUsers();
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

  // const rekom = [
  //   {
  //   image: `${require('../images/' + users[0].gambar + '.jpg')}`,
  //   nama: `${users[0].nama}`
  //   }
  // ]

  return (
      <>
      <div className='main'>
        <h1 class="title">City News Report</h1>
        <div class = "isi">
          <div class="row">
            <div class="leftcolumn">
              <div class="cardleft">
                {loading ? <p> Loading </p> : (
                  <> 
                    <div class="leftcolumn">
                      <h2 class = "title"> {data.name} </h2>
                      <h2 class = "title"> {data.main.temp} °C</h2>
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
              <a href='./rekomendasi'>
{/*                <div className='kiri'>
                  <img className='gambar' src={rekom[0].image} alt={rekom[0].image}/>
                </div>
                <p>{rekom[0].nama}</p>*/}
              </a>
              </div>
            </div>
            <div class="bottomrow">
              <div class="bottomcard">
              <a href='./berita'>
                <div className='columnkiri'>
                  <img className='center' src='https://img.okezone.com/dynamic/content/2022/06/13/337/2610825/ridwan-kamil-mulai-besok-izinkan-papa-mama-zara-dan-arka-lanjutkan-kehidupan-fana-ini-Vq0sBVmTQ8.jpg?h=200' /> 
                </div>
                <div className='topper'>
          <h1 className='smol'>
          Ridwan Kamil: Mulai Besok Izinkan Papa, Mama, Zara dan Arka Lanjutkan Kehidupan Fana Ini
          </h1>
          <p>
          Kata Kang Emil, Eril saat ini telah beristirahat dengan tenang. Dia juga selalu mendoakan Eril
          </p>
        </div>
        <div className='date'>
          <div className='verismol'>
            Senin, 13 Juni 2022
          </div>
        </div>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;
