import { useState } from 'react';
import React from 'react';
import NavBar from './components/Navbar'
import './App.css';
import Board from './components/Board';
import Form from './components/Form';

const imageUrls = [
  'https://t3.ftcdn.net/jpg/03/51/51/28/360_F_351512882_2kFH8IaSe4lyA7SXBLzEXyGKNEgbO1iH.jpg',
  'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg',
  'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWRqLTE0LmpwZw.jpg',
];

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(getRandomImages());
  const changeTheme = () => {
    setBackgroundImage(getRandomImages());
  };



  //Function to generate a random color
  function getRandomImages() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length)
    return imageUrls[randomIndex]
  }

  return (

    <div className="h-screen w-screen bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar changeTheme={changeTheme} />
      <Board />
    </div>
  );
};

export default App;


