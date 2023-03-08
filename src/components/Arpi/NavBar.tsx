import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"




export default function NavBar() {
  return (
    <div className='Navbar'>
        <ul>
            <li>
                <Link to={"/"}>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to={"/products"}>
                    <p>Products</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}
