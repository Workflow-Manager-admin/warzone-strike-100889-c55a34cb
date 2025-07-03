//
// HUD.js
//
// Skeleton file for in-game HUD overlay component
//
import React from 'react';

// PUBLIC_INTERFACE
function HUD() {
    /**
     * HUD Overlay: displays health, ammo, weapon icon, score, and view indicator.
     * To be implemented as live overlay during gameplay.
     */
    return (
        <div className="hud-overlay" data-testid="hud-overlay">
            <div className="hud-row">
                <span className="hud-health">Health: --</span>
                <span className="hud-ammo">Ammo: -- / --</span>
                <span className="hud-weapon">Weapon: [--]</span>
                <span className="hud-score">Score: --</span>
                <span className="hud-view">View: FPS/3rdP</span>
            </div>
            {/* Optional: Minimap */}
            {/* <div className="hud-minimap placeholder"></div> */}
        </div>
    );
}

export default HUD;
