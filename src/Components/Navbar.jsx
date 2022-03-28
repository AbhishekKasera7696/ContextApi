import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styling = styled(Link) `

margin-right:10px;
text-decoration:none;
color:black;

` 

const Navbar = () => {
  return (
    <div className='Nav'>
       <Styling  to='/Home'>Home</Styling >
     
      
       <Styling  to='/Login'>Login</Styling >
     
       
    </div>
  )
}

export {Navbar}