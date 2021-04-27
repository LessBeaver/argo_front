import React from 'react';
import './foothead.css';
// import header from './images/header.jpg'

export default function Header() {
    return(
        <div className="Header">
            <div className="Header-bg-title">
                <div className="Header-bg-title-container">
                    <h1 className="Header-title">Les Argonautes</h1>
                </div>
            </div>
            <img src="./images/header.jpg" alt="Header mythologie grecque" className="Header-bg"  />
        </div>
    )
}