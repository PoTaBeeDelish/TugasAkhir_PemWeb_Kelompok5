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

function Navbar() {
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
      </Nav>
    </>
  );
}

export default Navbar;
