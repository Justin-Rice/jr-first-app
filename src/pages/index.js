import React from 'react'
import { Link } from 'gatsby';

function onButtonClick(){
    console.log("hello");
}

const HomePage = () =>{
    return(
        <React.Fragment>
            <h1>Home Page</h1>
            <p>hi</p>
            <button onClick={onButtonClick}> Click Me</button>
            <div>
            <Link to='/about'>Click me to About</Link>
            </div>
        </React.Fragment>
    )

}
export default HomePage;
