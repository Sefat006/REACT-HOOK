import { useRef } from "react";


const Attribute = () => {

    let myImage = useRef();
    const change1 = () => {
        // if we click btn then the image will change to the next line image;
        myImage.current.src='https://loremflickr.com/640/360';
        myImage.current.setAttribute('height','200px');//set the image's height;
        myImage.current.setAttribute('width','200px');//set the image's width;
    }
    return (
        <div>
            <img ref={myImage} src="http://via.placeholder.com/640x360" alt="" />
            <button onClick={change1}>Click</button>
        </div>
    );
};

export default Attribute;