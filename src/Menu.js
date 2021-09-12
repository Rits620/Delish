import React from 'react';
import MenuBackground from '../src/assets/bg_top_img.jpg'

const Menu = () => {
    return (
        <div style={{
          backgroundImage: `url(${MenuBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          textAlign: "center",
          color: "white",
          fontFamily: "cursive",
        }}>
            <h1>This is Menu Page</h1>
        </div>
    )
}

export default Menu
