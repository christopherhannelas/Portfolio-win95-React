import React from 'react';
import Win95Startlogo from '../assets/win95.png';
import SidebarImage from '../assets/sidebar-image.png';
import Facebooklogo from '../assets/socials/Facebook.png';
import Twitterlogo from '../assets/socials/Twitter.webp';
import Linkedinlogo from '../assets/socials/Linkedin.webp';
import Gitlogo from '../assets/socials/Github.webp'
import ResumePdf from '../assets/files/ChristopherHannelas-Resume.pdf'
import Resumelogo from '../assets/icons/certificate_2-0.png'
import Soundlogo from '../assets/speakers.png';

function Navbar (){
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })

    return (

<nav class="navbar fixed-bottom navbar-light dropup navbar-95 d-flex justify-content-start  ">

<div class="">
  <button class="btn dropdown-toggle " data-toggle="dropdown" id="navbarDropdownMenuLink" aria-expanded="false" ><span class="d-inline-block align-top"><img src={Win95Startlogo} height="23"  alt="start button"></img> Start </span></button>
  <div class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
  <div class="container-fluid align-items-start">
  <div class="row">
    <button class="col-12 dropdown-item startMenu"><img src={SidebarImage} alt=""></img></button>
    <div class="w-100"></div>
    </div>
    <div class="row-1 ">
    <a class="col py-1 px-1 dropdown-item offset-2 startMenu " type="button" href="https://www.facebook.com/christopherhannelas/" target="_blank" rel="noreferrer"><h6><img class="social-image" src={Facebooklogo} alt=""/>  <u>F</u>acebook</h6></a>
    <a class="col py-1 px-1 dropdown-item offset-2 startMenu" type="button" href="https://twitter.com/ChrisHannelas" target="_blank" rel="noreferrer" ><h6><img class="social-image" src={Twitterlogo} alt=""/>  <u>T</u>witter</h6></a>
    <a class="col py-1 px-1 dropdown-item offset-2 startMenu" type="button" href="https://www.linkedin.com/in/christopher-hannelas-a56747209/" target="_blank" rel="noreferrer"><h6><img class="social-image" src={Linkedinlogo} alt=""/>  <u>L</u>inkedIn</h6></a>
    <a class="col py-1 px-1 dropdown-item offset-2 startMenu" type="button" href="https://github.com/christopherhannelas" target="_blank" rel="noreferrer"><h6><img class="social-image" src={Gitlogo} alt=""/>  <u>G</u>itHub</h6></a>
    <a class="col py-1 px-1 dropdown-item offset-2 " type="button" href={ResumePdf} target="_blank" rel="noreferrer"><h6><img class="social-image" src={Resumelogo} alt=""/>  <u>R</u>esume</h6></a>
   
    </div>
    </div>
    
  </div>
  </div>
  <div class="flex-grow-1 d-flex ">
  
      <button class="btn start-button	d-sm-none d-md-block" type="button">Test button</button>
      
      <button class="btn start-button d--sm-none d-md-block" type="button"> Test button </button>
      <button class="btn start-button d-none d-sm-block" type="button"> Test button </button>
      <button class="btn start-button d-none d-sm-block" type="button"> Test button </button>
      
      </div>
     
      <div class="timeframe "><img class="speaker" src={Soundlogo} alt=""/> {currentTime} </div>

</nav> 

    )
};

export default Navbar;