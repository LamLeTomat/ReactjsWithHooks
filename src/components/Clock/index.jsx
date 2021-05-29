import React from 'react';
import useClock from '../../hooks/useClock';

function Clock() {
    const {timeString} = useClock();
    return (
        <div>
            <p style={{fontSize: '60px', textAlign:'center'}}>{timeString}</p>
        </div>
    );
}

export default Clock;