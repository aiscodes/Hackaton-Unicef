import React from 'react';
import './Background.css';
import Particles from 'react-particles-js';
import Header from '../Header';
import  Telegram from '../Telegram'

export default function BackgroundAnimation({ children }) {
  return (
    <div id="demo" style={{ backgroundColor: '#F3FBFF' }}>
      <Particles
        className="animatedBackground"
        params={{
          particles: {
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            lineLinked: {
              enable: true,
              distance: 150,
              color: '#00758E',
              opacity: 0.4,
              width: 1,
            },
            number: {
              value: 250,
              density: {
                enable: true,
              },
            },
            move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },

            color: {
              value: '#00758E',
            },
          },
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10,
            },
          },
        }}
      />
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Header />
        {children}
      </div>
      <div style={{position: 'fixed', marginTop: '-50px', marginLeft:'95%'}}> 
        <Telegram  />
      </div>
    </div>
  );
}
