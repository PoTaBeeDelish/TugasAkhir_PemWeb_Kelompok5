import React from 'react';
import './jadwal.css'

const Jadwal = () => {
  return (
    <div class="parent">
      {/* <div class="div1">
        <img src="../src/images/Angkot.png" alt="Angkot" />
      </div>
      <div class="div2">
        <img src="../images/BusLintasDaerah.png" alt="Bus" />
      </div>
      <div class="div3">
        <img src="../images/Kereta.png" alt="Kereta" />
      </div> */}
      <div class="div4">
        <div class="heading">JADWAL KERETA API</div>
        {/* <div class="smol">Karena laman ini belum dibuat sehingga halaman ini merupakan halaman static. silahkan melihat gambar berikut (rss)</div> */}
        <div>
          <table>
            <tr>
              <th>Nama KA</th>
              <th>Tujuan</th>
              <th>Berangkat</th>
            </tr>
            <tr>
              <td>Malioboro Ekspres</td>
              <td>Yogyakarta</td>
              <td>08.20</td>
            </tr>
            <tr>
              <td>Jayabaya</td>
              <td>Pasar Senen</td>
              <td>11.55</td>
            </tr>
            <tr>
              <td>Gajayana</td>
              <td>Gambir</td>
              <td>13.25</td>
            </tr>
            <tr>
              <td>Bima</td>
              <td>Gubeng</td>
              <td>14.25</td>
            </tr>
            <tr>
              <td>Tawang Alun</td>
              <td>Banyuwangi</td>
              <td>16.10</td>
            </tr>
            <tr>
              <td>Mutiara Selatan</td>
              <td>Surabaya<br></br>Bandung<br></br>Gambir</td>
              <td>17.00</td>
            </tr>
            <tr>
              <td>Malabar</td>
              <td>Bandung-Pasarsenen</td>
              <td>16.00</td>
            </tr>
            <tr>
              <td>Matarmaja</td>
              <td>Pasar Senen</td>
              <td>09.00</td>
            </tr>
            <tr>
              <td>Malabar</td>
              <td>Pasar Senen</td>
              <td>09.00</td>
            </tr>
            <tr>
              <td>Majapahit</td>
              <td>Pasar Senen</td>
              <td>19.00</td>
            </tr>
            <tr>
              <td>Malioboro Ekspres</td>
              <td>Yogyakarta</td>
              <td>20.05</td>
            </tr>
            <tr>
              <td>Songgoriti</td>
              <td>Surabaya<br></br>Gubeng</td>
              <td>11.10</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Surabaya Kota</td>
              <td>04.30</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Surabaya Kota</td>
              <td>06.23</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Surabaya Kota</td>
              <td>12.50</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Surabaya<br></br>Gubeng</td>
              <td>04.30</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Surabaya Kota</td>
              <td>20.22</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Blitar – Kediri</td>
              <td>07.30</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Blitar – Kediri</td>
              <td>10.35</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Blitar – Kediri</td>
              <td>14.51</td>
            </tr>
            <tr>
              <td>Penataran</td>
              <td>Blitar</td>
              <td>21.06</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="div5"> </div>
      <div class="div6"> </div>
      <div class="div7"> </div>
      <div class="div8">  </div>
    </div>
  );
};

export default Jadwal;