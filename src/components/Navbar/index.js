import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Button } from 'bootstrap';

function Navbar() {
  
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(sessionStorage.getItem('Nama'))
  }, []);

  const logincheck = () => {
    console.log("test");
    if(user.name != ""){
      console.log("gg");
      return (
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      )
    } else {
      console.log("ez");
      return (
      <Button onClick={Logout}>Logout</Button>
    )}
  }

  const Logout = () => {
    sessionStorage.removeItem("name");
  }

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Icon icon="dashicons:admin-home" color="white" height="64" alt='Home' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/berita' activeStyle>
            Berita
          </NavLink>
          <NavLink to='/peta' activeStyle>
            Peta
          </NavLink>
          <NavLink to='/jadwal' activeStyle>
            Jadwal
          </NavLink>
          <NavLink to='/rekomendasi' activeStyle>
            Rekomendasi
          </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>        
      </Nav>
    </>
  );
}

export default Navbar;
