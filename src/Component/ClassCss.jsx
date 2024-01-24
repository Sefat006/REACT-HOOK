import React, { useRef } from 'react';

const ClassCss = () => {

    let Headline = useRef();
    const change3 = () => {
        Headline.current.classList.remove('text-success')
        Headline.current.classList.add('text-danger');
    }

    return (
        <div>
            <h1 className='text-success' ref={Headline}>This is HeadLine</h1>
            <button onClick={change3}>Click</button>
        </div>
    );
};

export default ClassCss;