import React from 'react';
import './Food.css';
import bakso from '../images/Bakso.jpg';
import gulaiA from '../images/GulaiAyam.jpg';
import gulaiK from '../images/GulaiKambing.jpg';
import kikil from '../images/Kikil.jpg';
import NasGor from '../images/NasiGoreng.jpg';
import NasPad from '../images/NasiPadang.jpg';
import Rawon from '../images/Rawon.jpg';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Rekomendasi = () => {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const Edit = () => {

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

  return (
    <>
    <button onClick={() => Edit()}>Edit</button>
    <h1 class="title">Food</h1>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/Bakso.jpg">
            <img src={bakso} alt="Bakso"/>
          </a>
          <div class="desc">Bakso</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/GulaiAyam.jpg">
            <img src={gulaiA} alt="Gulai Ayam" />
          </a>
          <div class="desc">Gulai Ayam</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/GulaiKambing.jpg">
            <img src={gulaiK} alt="Gulai Kambing" />
          </a>
          <div class="desc">Gulai Kambing</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/Kikil.jpg">
            <img src={kikil} alt="Kikil"/>
          </a>
          <div class="desc">Kikil</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/NasiGoreng.jpg">
            <img src={NasGor} alt="NasiGoreng"/>
          </a>
          <div class="desc">Nasi Goreng</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/NasiPadang.jpg">
            <img src={NasPad} alt="NasiPadang" />
          </a>
          <div class="desc">Nasi Padang</div>
        </div>
      </div>
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="../../public/Rawon.jpg">
            <img src={Rawon} alt="Bakso" />
          </a>
          <div class="desc">Rawon</div>
        </div>
      </div>

      <div class="clearfix"></div>
    </>
  );
};

export default Rekomendasi;
