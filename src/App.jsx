import { useRef, useState } from 'react'
import Attribute from './Component/Attribute';
import UserRefInput from './Component/UserRefInput';
import ClassCss from './Component/ClassCss';
import MutedValue from './Component/MutedValue';

const App=()=> {

  let myHeadLine = useRef();

  const change = () =>{
    myHeadLine.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  }
  return (
      <div>
        <p style={{color: 'blue'}}>basic of useRef start</p>
        <h1 ref={(h1)=>(myHeadLine=h1)}></h1>
        <button onClick={change}>Click</button>
        <p style={{marginBottom: "50px", color: 'red'}}>basic of useRef ends</p>

        <p style={{color: 'blue'}}>Attribute Start</p>
        <Attribute />
        <p style={{marginBottom: "50px",color: 'red'}}>Attribute ends</p>

        <p style={{color: 'blue'}}>UseRef Input Start</p>
        <UserRefInput />
        <p style={{color: 'red',marginBottom:'50px'}}>UseRef Input ends</p>
        <p style={{color: 'blue'}}>ClassCss Start</p>
        <ClassCss />
        <p style={{color: 'red',marginBottom:'50px'}}>ClassCss ends</p>
        <p style={{color: 'blue'}}>MutedValue Start</p>
        <MutedValue />
        <p style={{color: 'red',marginBottom:'50px'}}>MutedValue ends</p>
      </div>
    
  )
}

export default App
