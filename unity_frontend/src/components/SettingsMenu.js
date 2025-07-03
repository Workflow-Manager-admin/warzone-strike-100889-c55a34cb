//
// SettingsMenu.js
//
// Skeleton file for Settings Menu UI component
//
import React from 'react';

// PUBLIC_INTERFACE
import { useGameContext } from "../game/GameContext";

function SettingsMenu() {
    /**
     * Settings menu for volume, controls, and game options.
     * "Back to Menu" returns to LandingScreen.
     */
    const { dispatch } = useGameContext();

    const handleBack = () => {
        dispatch({ type: "SET_STAGE", payload: "landing" });
    };

    return (
        <div className="settings-menu" data-testid="settings-menu">
            <h2>Settings</h2>
            <div className="settings-section">
                <label>
                    <span>Music</span>
                    <input type="checkbox" defaultChecked />
                </label>
                <label>
                    <span>Sound FX</span>
                    <input type="checkbox" defaultChecked />
                </label>
                <label>
                    <span>Volume</span>
                    <input type="range" min="0" max="100" defaultValue="80" />
                </label>
            </div>
            <div className="settings-section">
                <h3>Controls</h3>
                <ul>
                    <li>Move: WASD / Arrow Keys</li>
                    <li>Shoot: Mouse / Tap</li>
                </ul>
            </div>
            <button className="btn btn-back" onClick={handleBack}>Back to Menu</button>
        </div>
    );
}

export default SettingsMenu;
