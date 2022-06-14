import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './array'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
  let history = useNavigate()
  
  // You may skip this part if you're
  // using react-context api or redux
  function setID(id,nama,lokasi,deskripsi, gambar){
    localStorage.setItem('id', id);
    localStorage.setItem('Nama', nama);
    localStorage.setItem('Lokasi', lokasi);
    localStorage.setItem('Deskripsi', deskripsi);
    localStorage.setItem('Gambar', gambar);
  }
  
  // Deleted function - functionality 
  // for deleting the entry
  function deleted(id){
      
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    // deleting the entry with index
    array.splice(index,1)
  
    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/')
  }
  
  return (
    <div  style={{margin:'10rem'}}>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Nama</th>
      <th>Lokasi</th>
      <th>Deskripsi</th>
      <th>Gambar</th>
    </tr>
  </thead>
  <tbody>
  
    {/* Mapping though every element in the array
    and showing the data in the form of table */}
    {array.map((item) => {
return(
<tr>
      <td>{item.Nama}</td>
      <td>{item.Lokasi}</td>
      <td>{item.Deskripsi}</td>
      <td>{item.Gambar}</td>
        
      {/* getting theid,Nama, and Lokasi for storing these
          value in the jsx with onclick event */}
      <td><Link to={`/edit`}>
        <Button onClick={(e) => setID(item.id,item.Nama,item.Lokasi,item.Deskripsi,item.Gambar)} variant="info">Update</Button>
        </Link>
        <Button onClick={e => deleted(item.id)} variant="danger">Delete</Button></td>
    </tr>
)})}
  </tbody>
</Table>
  
{/* Button for redirecting to create page for
   insertion of values */}
<Link className="d-grid gap-2" to='/create'>
  <Button variant="warning" size="lg">Create</Button>
</Link>
    </div>
  )
}
  
export default Home