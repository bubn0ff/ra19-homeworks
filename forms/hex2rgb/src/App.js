import React, { useState } from 'react';
import './App.css';
import hex2rgb, { setOutputFontColor } from './components/Hex2rgb';

export default function App() {
  const [rgb, setRgb] = useState('');
  const [rgbBackgroundColor, setRgbBackColor] = useState('');

  const onChange = event => {
    const hex = event.target.value;
    setRgb(hex2rgb(hex));
    setRgbBackColor(hex2rgb(hex, -30));
  };
  
  return (
    <div className="hex2rgb" style={{backgroundColor: rgb}}>
      <div className="container">
        <input
          type="text"
          className="input"
          maxLength="7"
          onChange={onChange}
        />
        <div 
          className="output" 
          style={{backgroundColor: rgbBackgroundColor, color: setOutputFontColor(rgbBackgroundColor) ? 'white' : 'black'}}>
          {rgb}
        </div>
      </div>
    </div>
  );
}