import React, { useState } from 'react';
import '../scss/styles.scss';
import Button from '@mui/material/Button';
import axios from 'axios';
import keyboard100 from '../assets/100keyboard.png';
import keyboard80 from '../assets/80keyboard.png';
import keyboard75 from '../assets/75keyboard.png';
import keyboard65 from '../assets/65keyboard.png';
import keyboard60 from '../assets/60keyboard.png';


const SavedBuilds = ({builds ,setter}) => {
  // retrieve id from parent component props, query database to delete at build_id
  const removeBox = (build_id) => {
    axios.delete(`/api/build?build_id=${build_id}`)
      .then(() =>{
        setter();
      });
  };

  const sizeImages = {
    '100%':keyboard100,
    'TKL': keyboard80,
    '75%': keyboard75,
    '65%': keyboard65,
    '60%': keyboard60,
  };

  const cards = [];
  for(const build of builds) {
    cards.push(
      <div className="buildBox">
        <div className ="name">{build.name}</div> 
        <div className='bothDivs'>
          <div className='mainKeebsDiv'>
         
            
            <section>PCB: {build.pcb} </section>
            <section>Plate: {build.plate} </section>
            <section>Switch Type: {build.switch}</section> 
            <section>Keycaps: {build.keycap}</section>
            <div className = "removeButton"><Button onClick={() => removeBox(build.build_id)}><div className='landingLoginButton'>REMOVE BUILD</div></Button></div>

          </div>
          <div className="imageBox">
            <section>Size: {build.size}</section>
            <img className="keebPics" src={sizeImages[build.size]}/>          
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="savedBuilds">
      {cards}
    </div>
  );
};

export default SavedBuilds;
