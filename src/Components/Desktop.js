import React from 'react';
import ProfileIco from '../assets/icons/user_computer-1.png'


function Desktop (){
    return (
    <div class="desktop-grid">
<div class="container-fluid ">
  <div class="row desktop-shortcut">
    <div class="col-1">
    
        <button class="desktop" ondblclick="#">
            <img class="icon" src={ProfileIco} alt=""/>
            <div class="desktop-border">
                <div class="icon-text">User Profile</div>
            </div>
        </button> 

    <div class="row desktop-shortcut">
    <div class="col-1">
      
    <button class="desktop" ondblclick="#">
            <img class="icon" src={ProfileIco} alt=""/>
            <div class="desktop-border">
                <div class="icon-text">User Profile</div>
            </div>
        </button> 

    </div> </div>
    <div class="row desktop-shortcut">
    <div class="col-1">
      
    <button class="desktop" ondblclick="#">
            <img class="icon" src={ProfileIco} alt=""/>
            <div class="desktop-border">
                <div class="icon-text">User Profile</div>
            </div>
        </button> 
        
    </div>
</div>
</div>
</div>
</div></div>
    )
};


export default Desktop;