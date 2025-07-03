//
// GunSelect.js
//
// Skeleton file for Gun/Weapon Selection UI component
//
import React from 'react';

// PUBLIC_INTERFACE
import { useGameContext } from "../game/GameContext";

function GunSelect() {
    /**
     * Weapon/gun selection screen, listing available weapons/icons.
     * "Ready" advances to arena/gameplay stage.
     * (In future: record selected weapon!)
     */
    const { dispatch } = useGameContext();

    const handleReady = () => {
        dispatch({ type: "SET_STAGE", payload: "arena" });
    };

    return (
        <div className="gun-select-screen" data-testid="gun-select">
            <h2>Select Your Weapon</h2>
            <div className="gun-list">
                {/* Placeholder: Weapon preview tiles */}
                <div className="gun-card placeholder">Assault Rifle</div>
                <div className="gun-card placeholder">Shotgun</div>
                <div className="gun-card placeholder">Sniper Rifle</div>
            </div>
            <button className="to-arena btn" onClick={handleReady}>Ready: Start Battle</button>
        </div>
    );
}

export default GunSelect;
