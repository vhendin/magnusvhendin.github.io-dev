import React, { useState } from 'react';
import Helmet from 'react-helmet'
import styles from './index.module.css'

export default function Home() {
  const [rightHand, setRightHand] = useState('🖖');
  const [face, setFace] = useState('😘');
  const [leftHand, setLeftHand] = useState('🤘');

  function randomize() {
    var smileys = ['😀','😃','😄','😁','😅','😂','😇','🙂','😌','😘','😙','😚','😝','🤪','🤨','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','😨','😥','😓','😶','😑','😬','😯','😦','😧','😮','😲','🤤','😵','🤐','🥴','🤮','🤒','🤕','🤠','👿'];
    var hands = ['✊','🤞','🤟','🤘','👌','✋','🖐','🖖','🖕','🤙'];
    var randomSmiley = smileys[Math.floor(Math.random() * smileys.length)];
    var randomRightHand = hands[Math.floor(Math.random() * hands.length)];
    var randomLeftHand = hands[Math.floor(Math.random() * Math.random() * hands.length)];
    setFace(randomSmiley);
    setRightHand(randomRightHand);
    setLeftHand(randomLeftHand);
  }

  return <div className={styles.wrapper}>
    <Helmet title={face}/>
    <div className={styles.logoContainer}>
      <div className={styles.right}><span id="right" role="img" aria-label="right hand">{rightHand}</span></div>
      <a className={styles.face} alt="linkedin" href="https://www.linkedin.com/in/vhendin/"><span id="face" role="img" aria-label="right hand">{face}</span></a>
      <div className={styles.left}><span id="left" role="img" aria-label="left hand">{leftHand}</span></div>
    </div>
    <p>
      <button onClick={randomize} className={styles.randomize}>
        Randomize
      </button>
    </p>
    <footer>
      <i>Magnus Vhendin, <span id="year">{new Date().getFullYear()}</span></i>
    </footer>
  </div>
}
