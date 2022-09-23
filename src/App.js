import { render } from '@testing-library/react';
import { CSSTransition } from 'react-transition-group'
import React, { useEffect, useState } from 'react';
import './App.css';
import gunSound from './snd/toc.aif';

function App() {
  
  const getImg = () => {
    return "img/hakgyo.png";
  }

  const nodeRef = React.useRef(null);

  const [click, setClick] = useState(0);

  const [clickState, setClickState] = useState(0);

  const [hakgyoImg, setHakgyoImg] = useState(getImg);

  const audios = new Map();
/*
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
      audios
    };
  }
*/

  var audio = new Audio(gunSound);


  const StartClick = () => {
    setClick(click + 1);
    setClickState(0);
    setHakgyoImg("img/hakgyoboom.png");
  }

  const endClick = () => {
    setClickState(1);
    setHakgyoImg(getImg);
    audio.play();
  }

  return(
    <div onPointerDown={StartClick} onPointerUp={endClick} onLostPointerCapture={endClick}>
      <CSSTransition
        nodeRef={nodeRef}
        in={clickState}
        timeout={30}
        classNames="hakgyo"
        onEnter={()=>{setHakgyoImg("img/hakgyo.png");}}
        onExited={()=>{setHakgyoImg("img/hakgyoboom.png");}}
        >
        <div className="count">{click}</div>
      </CSSTransition>
      <img id="hakgyo" src={hakgyoImg} />
    </div>
  );
}

export default App;


