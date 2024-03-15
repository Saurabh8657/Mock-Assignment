import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='d-flex justify-content-around vw-100 p-2 bg-primary'>
            <Link to="/" className='text-white text-decoration-none fs-2'>Search</Link>
            <Link to="/reciepe/favourites" className='text-white text-decoration-none fs-2'>Favourites</Link>
        </div>
    </div>
  )
}
