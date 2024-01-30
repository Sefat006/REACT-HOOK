import React, { useRef } from 'react';

const MutedValue = () => {

    let number = useRef(0);
    const change4=()=>{
        const numbers = number.current++;
        console.log(numbers);
    }
    return (
        <div>
            <button onClick={change4}>Click</button>
        </div>
    );
};

export default MutedValue;