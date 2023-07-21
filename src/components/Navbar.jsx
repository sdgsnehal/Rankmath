import React from 'react';
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar">
    <ul class="menu">
      <li class="menu-item"><a href="#">Day</a></li>
      <li class="menu-item"><a href="#">Week</a></li>
      <li class="menu-item"><a href="#">Month</a></li>
      <li class="menu-item"><a href="#">Year</a></li>
    </ul>
  </nav>
  )
}

export default Navbar