import React from 'react'
import '../App.css'
import Header from './Header';
import Images from '../Fetch';

const Gallery = () => {
  return (
    <div>
        <Header/>
      <div className="app">
      <div className="gallery-heading">
        <h1>Gallery</h1>
        <p>find your love here!</p>
      </div>
      <div className="container">
        <div className="gallery" id="gallery">
          <img src={Images.photo1} alt="none" />
          <img src={Images.photo2} alt="none" />
          <img src={Images.photo3} alt="none" />
          <img src={Images.photo4} alt="none" />
          <img src={Images.photo5} alt="none" />
          <img src={Images.photo6} alt="none" />
          <img src={Images.photo7} alt="none" />
          <img src={Images.photo8} alt="none" />
          <img src={Images.photo9} alt="none" />
          <img src={Images.photo10} alt="none" />
          <img src={Images.photo11} alt="none" />
          <img src={Images.photo12} alt="none" />
          <img src={Images.photo13} alt="none" />
          <img src={Images.photo14} alt="none" />
          <img src={Images.photo15} alt="none" />
          <img src={Images.photo16} alt="none" />
          <img src={Images.photo17} alt="none" />
          <img src={Images.photo18} alt="none" />
          <img src={Images.photo19} alt="none" />
          <img src={Images.photo20} alt="none" />
          <img src={Images.photo21} alt="none" />
          <img src={Images.photo22} alt="none" />
          <img src={Images.photo23} alt="none" />
          <img src={Images.photo24} alt="none" />
          <img src={Images.photo25} alt="none" />
          <img src={Images.photo26} alt="none" />
          <img src={Images.photo27} alt="none" />
          <img src={Images.photo28} alt="none" />
          <img src={Images.photo29} alt="none" />
          <img src={Images.photo30} alt="none" />
          <img src={Images.photo31} alt="none" />
          <img src={Images.photo32} alt="none" />
          <img src={Images.photo33} alt="none" />
          <img src={Images.photo34} alt="none" />
          <img src={Images.photo35} alt="none" />
          <img src={Images.photo36} alt="none" />
          <img src={Images.photo37} alt="none" />
          <img src={Images.photo38} alt="none" />
          <img src={Images.photo39} alt="none" />
        </div>
      </div>
      <footer>
        <p className="copyright" style={{marginBottom:20 + 'px'}}>Copyright AnshKaushal 2022</p>
    </footer>
    </div>
    </div>
  )
}

export default Gallery