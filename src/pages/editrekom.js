import React, { useEffect, useState } from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const Editrekom = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div  style={{margin:'10rem'}}>
      <Link className="d-grid gap-2 mb-10" to='/create'>
        <Button className='mb-10' variant="success" size="lg">Create</Button>
      </Link>
        <Table striped bordered hover size="sm" className='mt-10'>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Lokasi</th>
              <th>Deskripsi</th>
              <th>Gambar</th>
              <th>Edit Data</th>
            </tr>
          </thead>
          <tbody>
  
            {/* Mapping though every element in the array
            and showing the data in the form of table */}
            {users.map((user, index) => {
              return(
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.nama}</td>
                  <td>{user.lokasi}</td>
                  <td>{user.deskripsi}</td>
                  <td>{user.gambar}</td>
        
                  {/* getting theid,Nama, and Lokasi for storing these
                  value in the jsx with onclick event */}
                  <td>
                    <Link to={`edit/${user.id}`}>
                      <Button variant="info">Update</Button>
                    </Link>
                      <Button onClick={() => deleteUser(user.id)} variant="danger">Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
    </div>
  )
}

export default Editrekom
