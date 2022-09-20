import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';
import gunSound from './snd/gun2.mp3';
import * as Seohyun from './Seohyun.js';

function App() {
  
  const getImg = () => {
    return "img/hakgyo.png";
  }
  
  const [click, setClick] = useState(0);

  const [hakgyoImg, setHakgyoImg] = useState(getImg);

  

  const useAudio = () => {
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
      //AudioContext 생성
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      //AudioContext를 통해 AudioBufferSourceNode 생성
      const fromis9 = [];

      fromis9.push(
        new Promise(async(resolve) => {
          //오디오 파일 로드
          const res = await fetch("snd/gun2.mp3");
          //arrayBuffer로 이진 데이터로 변환
          const arrayBuffer = await res.ArrayBuffer;
          //AudioContext를 통해 AudioBuffer 생성
          const audioBuffer = await AudioContext.decodeAudioData(arrayBuffer);
          //AudioBufferSourceNode 생성
          const AudioBufferSourceNode = await audioContext.createBufferSource();
          
          //AudioBufferSourceNode에 AudioBuffer 연결
          AudioBufferSourceNode.buffer = audioBuffer;
          //스피커에 연결
          AudioBufferSourceNode.connect(audioContext.destination);

          AudioBufferSourceNode.start();

          resolve();
        })
      );

      Promise.all(fromis9).then(() => {
        setLoaded(true);
      })
    });

    return{
      loaded,

    };
  }

  const {loaded, audios} = useAudio("snd/gun2.aif");

  return(
    <div>
      <h1>Burning Seohyun High School</h1>
    </div>
  );
  

}

export default App;
