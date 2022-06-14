import React, { useEffect, useState } from 'react';
import './Food.css';
import Bakso from '../images/Bakso.jpg';
import Gulai from '../images/Gulai.jpg';
import NasiGoreng from '../images/NasiGoreng.jpg';
import NasiPadang from '../images/NasiPadang.jpg';
import Rawon from '../images/Rawon.jpg';
import AyamGeprek from '../images/AyamGeprek.jpg';
import AyamPenyet from '../images/AyamPenyet.jpg';
import AyamBakar from '../images/AyamBakar.jpg';
import Sate from '../images/Sate.jpg';
import Soto from '../images/Soto.jpg';
import loggedin from '../components/LoginForm/loggedin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";

const Rekomendasi = () => {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    getUsers();
    setUser(localStorage.getItem('Nama'))
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  
  const Edit = () => {
    console.log(user.name);
    if(user.name != ""){
      console.log("a");
      navigate("/editrekom");
    } else {
      MySwal.fire({
        title: 'Anda tidak memiliki akses',
        text: 'Anda harus login terlebih dahulu',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Kembali',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      })
    }
  }

  const show = (user) => {
    const pic = require('../images/'+ user.gambar +'.jpg');
    MySwal.fire({
      title: `${user.nama}`,
      imageUrl: `${pic}`,
      html: `Lokasi : ${user.lokasi} <br/> Deskripsi : ${user.deskripsi}`
    })
  }

  return (
    <>
    <button onClick={() => Edit()}>Edit</button>
    <h1 class="title">Food</h1>
    {users.map((user, index) => {
      const image = require('../images/' + user.gambar + '.jpg');
      return (
        <div class="responsive">
        <div class="gallery" onClick={() => show(user)}>
          <img className='gambar' src={image} alt={user.gambar}/>
        <div class="desc">{user.nama}</div>
      </div>
    </div>
      )
    })}
      <div class="clearfix"></div>
    </>
  );
};

export default Rekomendasi;
