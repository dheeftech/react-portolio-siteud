import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ()=>{
	return(
           <div>
           	  <nav>
           	  	<div className='logo'>
           	  		<img src={logo} alt='logo' />
           	  	</div>
           	  	<div className='nav-links'>
           	  		<ul>
           	  			<li>
           	  				<a href='/'>Home</a>
           	  			</li>
           	  			<li>
           	  				<a href='/about'>About</a>
           	  			</li>
           	  			<li>
           	  				<a href='/services'>Services</a>
           	  			</li>
           	  			<li>
           	  				<a href='/portfolio'>Portfolio</a>
           	  			</li>
           	  		</ul>
           	  	</div>
           	  </nav>
           </div>

		);
}

export default Navbar;
