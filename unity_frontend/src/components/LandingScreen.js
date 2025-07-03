//
// LandingScreen.js
//
// Skeleton file for the Landing Screen UI component
//
import React from 'react';

// PUBLIC_INTERFACE
function LandingScreen() {
    /**
     * Main game landing screen: title, background, menu buttons.
     * UI and logic to be implemented.
     */
    return (
        <div className="landing-screen" data-testid="landing-screen">
            <div className="animated-bg placeholder"></div>
            <h1 className="game-title">Warzone Strike</h1>
            <div className="landing-menu">
                <button className="btn btn-play">Play</button>
                <button className="btn btn-settings">Settings</button>
            </div>
        </div>
    );
}

export default LandingScreen;
