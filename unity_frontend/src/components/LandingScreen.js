//
// LandingScreen.js
//
// Skeleton file for the Landing Screen UI component
//
import React from 'react';

import { useGameContext } from "../game/GameContext";

// PUBLIC_INTERFACE
function LandingScreen() {
    /**
     * Main game landing screen: title, background, menu buttons.
     * When Play is clicked, stage advances to character-select.
     * When Settings is clicked, goes to settings menu.
     */
    const { dispatch } = useGameContext();

    const handlePlay = () => {
        dispatch({ type: "SET_STAGE", payload: "character-select" });
    };

    const handleSettings = () => {
        dispatch({ type: "SET_STAGE", payload: "settings" });
    };

    return (
        <div className="landing-screen" data-testid="landing-screen">
            <div className="animated-bg placeholder"></div>
            <h1 className="game-title">Warzone Strike</h1>
            <div className="landing-menu">
                <button
                    className="btn btn-play"
                    onClick={handlePlay}
                    data-testid="play-btn"
                >
                    Play
                </button>
                <button
                    className="btn btn-settings"
                    onClick={handleSettings}
                    data-testid="settings-btn"
                >
                    Settings
                </button>
            </div>
        </div>
    );
}

export default LandingScreen;
