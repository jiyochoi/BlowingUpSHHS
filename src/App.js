import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';
import gunSound from './snd/gun2.mp3';

function App() {
  
  const getImg = () => {
    return "img/hakgyo.png";
  }
  
  const [click, setClick] = useState(0);

  const [hakgyoImg, setHakgyoImg] = useState(getImg);

  //neverending loop
  /*play sound
  const useAudio = () => {
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
      //AudioContext 생성
      const AudioContext = (window.AudioContext || window.webkitAudioContext)();
      const audioContext = new AudioContext();
      
      //pending
      const fromis9 = new Promise(async (resolve, reject) => {

        const meorahaji = fetch("snd/gun2.aif");
        const arrayBuffer = new ArrayBuffer(meorahaji);
        const audioBuffer = await AudioContext.decodeAudioData(arrayBuffer);
        const AudioBufferSourceNode = await audioContext.createBufferSource();
        
        AudioBufferSourceNode.buffer = audioBuffer;
        AudioBufferSourceNode.connect(audioContext.destination);

        AudioBufferSourceNode.start();

        resolve();
      });
      //fulfilled

      Promise.all(fromis9).then(() => {
        setLoaded(true);
      })
    });

    return{
      loaded,
      audios,
    };
  }

  const {loaded, audios} = useAudio("snd/gun2.aif");

  */

  const useAudio = () => {
    
  }
  
  return(
    <div>hello world</div>
  );
}

export default App;
