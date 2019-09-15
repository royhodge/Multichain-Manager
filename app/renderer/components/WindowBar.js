import React from 'react';
import { remote } from 'electron';

// Constants
import platform from '../constants/Platform'

// Styles

const quitApp = () => {
  remote.app.quit()
}
const hideApp = () => {
  remote.BrowserWindow.getFocusedWindow().minimize();
}

export default function Windowbar() {

  let str = `Multichain Manager on ${platform}`
  return (
    <div className='windowbar' position="static">
      <span className='windowbarTitle'>{str}</span>
      <div>
        <button className='minimizeBtn windowbarIcon' onClick={hideApp}>_</button>
        <button className='closeBtn windowbarIcon' onClick={quitApp}>X</button>
      </div>
    </div>
  );
}
