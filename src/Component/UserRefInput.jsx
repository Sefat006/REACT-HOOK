import { useRef } from "react";


const UserRefInput = () => {

    let FirstName,LastName=useRef();

    const change2=()=>{
        let fName=FirstName.value;
        let lName=LastName.value;

        alert(fName+" "+lName);
    }

    return (
        <div>
            <input ref={(a)=>(FirstName=a)} placeholder="First Name" />
            <input ref={(b)=>(LastName=b)} placeholder="Last name" />
            <br></br>
            <button onClick={change2}>Click</button>
        </div>
    );
};

export default UserRefInput;