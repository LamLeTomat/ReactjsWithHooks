import React, { useState } from 'react';
import './ColorBox.scss';


ColorBox.propTypes = {
    
};

function ColorBox() {
    
    const [ color, setColor ] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    }) ;

    function getRandomColor(){
        const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
        const randomIndex = Math.trunc(Math.random() * 5);
        return COLOR_LIST[randomIndex]
    }

    function handleBoxClick() {
        //get random color ---> setColor
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor)
    }
    return (
        <div 
            className="color-box" 
            style={{backgroundColor: color}}
            onClick={() => handleBoxClick()}
        >
            
        </div>
    );
}

export default ColorBox;