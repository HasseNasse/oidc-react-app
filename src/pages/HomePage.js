import '../App.css';
import React from 'react'
import logo from '../loluclicked.png';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
    return ( 
        <React.Fragment>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>OIDC App</h1>
            <LoginButton />
        </React.Fragment> 
    );
}
 
export default HomePage;