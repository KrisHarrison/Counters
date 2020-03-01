import React from 'react';
import '../css/navbar.css'

const NavBar = ({counters}) => {
    return (
        <div className="navbar">
            <h1>NavBar</h1>
            
        {isZeroCount(counters)}
        </div>
      );

    function isZeroCount(counters){
        return (counters.length === 0)? <span>There are no counters</span>:<span>There are {counters.length} counters</span>
    }
}
 
export default NavBar;