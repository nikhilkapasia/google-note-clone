import React from 'react'
import './App.css';
function Footer() {
    const year = new Date().getFullYear(); 
    return (
        <div className="footer">
            <h2>copyright @ {year}</h2>
        </div>
    )
}

export default Footer
