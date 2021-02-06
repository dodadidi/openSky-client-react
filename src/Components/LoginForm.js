import React from "react";
// import React, {useState} from "react";
import GoogleButton from 'react-google-button'

function LoginForm() {
    // const [name, setName] = useState("");
    // const [headingText, setHeading] = useState("");
    // const [isMouseOver, setMouseOver] = useState(false);

    // function handleClick(event){
    //     setHeading(name);
    //     event.preventDefault();
    // }
    // function handleMouseOver(){
    //     setMouseOver(true)
    // }
    // function handleMouseOut(){
    //     setMouseOver(false)
    // }
    // function handleChange(event){
    //     setName(event.target.value)
    // }

    return(        
        <div className="container">
            <div className="GoogleButton">
            <GoogleButton onClick={() => { console.log('Google button clicked') }}/> 
            </div>
            {/* <h1>Hello {headingText}</h1>
            <form onSubmit={handleClick}>
                <input onChange={handleChange} type="text" placeholder="What's your name?" />               
                <button type="submit"
                    style={{backgroundColor: isMouseOver ? "#FBD9E2": "rgba(252, 252, 252, 0.6)"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    Submit</button>
            </form> */}
        </div>
    );
}
export default LoginForm;
