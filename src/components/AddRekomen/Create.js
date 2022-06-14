import React, { useState } from 'react' 
import { Button, Form } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
  
function Create() {
  
    // Making usestate for setting and
    // fetching a value in js
    const [nama, setname] = useState('');
    const [lokasi, setlocation] = useState('');
    const [deskripsi, setdescription] = useState('');
    const [gambar, setpicture] = useState("Pilih Gambar");
  
    // Using useNavigation for redirecting to pages
    let navigate = useNavigate();
  
    // Function for creating a post/entry
    const saveUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users", {
          nama,
          lokasi,
          deskripsi,
          gambar,
        });
        navigate("/editrekom");
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div>
      <Form className="d-grid gap-2" style={{margin:'15rem'}} onSubmit={saveUser}>
  
      {/* Fetching a value from input textfirld 
      in a setname using usestate*/}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control onChange={e => setname(e.target.value)} 
                      type="text"
                      placeholder="Nama" required/> 
      </Form.Group>
  
      {/* Fetching a value from input textfirld in
      a setage using usestate*/}
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Control onChange={e => setlocation(e.target.value)} 
                      type="text"
                      placeholder="Lokasi" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control onChange={e => setdescription(e.target.value)} 
                      type="text"
                      placeholder="Deskripsi" required/>
      </Form.Group>
  
      <Form.Group className='mb-3' controlId='formBasicPicture'>
        <Form.Select onChange={e => setpicture(e.target.value)}>
          <option value="select">Pilih Gambar</option>
          <option value="Soto">Soto</option>
          <option value="Rawon">Rawon</option>
          <option value="Gulai">Gulai</option>
          <option value="Bakso">Bakso</option>
          <option value="AyamGeprek">Ayam Geprek</option>
          <option value="AyamPenyet">Ayam Penyet</option>
          <option value="AyamBakar">AyamBakar</option>
          <option value="NasiPadang">Nasi Padang</option>
          <option value="Sate">Sate</option>
        </Form.Select>
      </Form.Group>
  
      {/* handing a onclick event in button for
      firing a function */}
      <Button
        variant="primary" type="submit">
        Submit
      </Button>
  
      {/* Redirecting back to home page */}
      <Link className="d-grid gap-2" to='/editrekom'>
        <Button variant="info" size="lg">
          Home
        </Button>
      </Link>
      </Form>
    </div>
  )
}
  
export default Create