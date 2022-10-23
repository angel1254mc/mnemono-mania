import React from 'react'
import '../css/HomeScreen.css';
import {Link} from 'react-router-dom';
function HomeScreen() {
  return (
    <div className="home-outer">
        <div className="home-inner">
            <div className="or-title-or-something">
                Mnemono-mania
            </div>
            <div className="start-button">
                Start Game
            </div>
            <div className="collections-button">
                <Link to="collections">Mnemonic Collections</Link>
            </div>
            <div className="options-button">
                Options
            </div>
        </div>
    </div>
  )
}

export default HomeScreen