import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const imageUrl = "http://192.168.150.1:8080/images/timg2.png"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <img src={imageUrl} alt={"item.info"} onLoad={onLoad} onError={onImageLoadErr}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function onLoad(){
  console.log("on load img")
}

function onImageLoadErr(e){
  console.log("load faild = " + e)
}

export default App;
