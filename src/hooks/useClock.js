import React, { useEffect, useState } from 'react';


function formatDate(date) {

    const hours = `0${date.getHours()}`.slice(-2); //giữ lại 2 số đầu tiên
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    
    return `${hours}:${minutes}:${seconds}`;
}

export default function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now)
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            //cleanup
            console.log('Clock cleanup');
            clearInterval(clockInterval)
        }
    }, [])
    return {timeString}
}
