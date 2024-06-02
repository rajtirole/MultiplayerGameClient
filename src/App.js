import React, { useState, useEffect } from 'react';
import './App.css';
import './component/cursor.css'; // Import the custom cursor CSS
import MenuSideMenu from "./component/MenuSideMenu";
import MultiplayerBox from "./component/MultiplayerBox";
import ProfileSideBar from "./component/ProfileSideBar";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='Container'>
      <MenuSideMenu />
      <MultiplayerBox />
      <ProfileSideBar />
      {/* Custom cursor element */}
      <div
        className="custom-cursor"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
    </div>
  );
}

export default App;
