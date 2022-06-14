import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
  
  
const Edit = () => {
  
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [nama, setname] = useState('');
    const [lokasi, setlocation] = useState('');
    const [deskripsi, setdescription] = useState('');
    const [gambar, setpicture] = useState("Pilih Gambar");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserById();
    }, []);

    // function for handling the edit and 
    // pushing changes of editing/updating
    const updateUser = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:5000/users/${id}`, {
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
    
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setname(response.data.nama);
        setlocation(response.data.lokasi);
        setdescription(response.data.deskripsi);
        setpicture(response.data.gambar);
    };
      
  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}} onSubmit={updateUser}>
  
            {/* setting a name from the input textfiled */}
            <Form className="mb-3" controlId="formBasicEmail">
                <Form.Control value={nama} 
                              onChange={e => setname(e.target.value)}  
                              type="text" placeholder="Nama" />
            </Form>
  
            {/* setting a location from the input textfiled */}
            <Form className="mb-3" controlId="formBasicPassword">
                <Form.Control value={lokasi} 
                              onChange={e => setlocation(e.target.value)} 
                              type="text" placeholder="Lokasi" />
            </Form>

            {/* setting a description from the input textfiled */}
            <Form className="mb-3" controlId="formBasicPassword">
                <Form.Control value={deskripsi} 
                              onChange={e => setdescription(e.target.value)} 
                              type="text" placeholder="Deskripsi" />
            </Form>
            
            <Form className='mb-3' controlId='formBasicPicture'>
                <Form.Select value={gambar} 
                             onChange={e => setpicture(e.target.value)}>
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
            </Form>

            {/* Hadinling an onclick event running an edit logic */}
            <Button
            variant="primary" type="submit" size="lg">
                Update
            </Button>
  
            {/* Redirecting to main page after editing */}
            <Link className="d-grid gap-2" to='/editrekom'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default Edit