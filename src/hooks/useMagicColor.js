import React, { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {
    const LIST_COLOR = ['red', 'deeppink', 'black', 'yellow', 'green']
    const currentIndex = LIST_COLOR.indexOf(currentColor);
    let newIndex = currentIndex;
    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random()*5);
    }
    //random
    console.log(LIST_COLOR[newIndex])
    return LIST_COLOR[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    //change color every one second
    //1, Tạo interval để set tgian
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            
            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useMagicColor;