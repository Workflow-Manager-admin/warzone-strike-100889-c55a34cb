//
// GunSelect.js
//
// Skeleton file for Gun/Weapon Selection UI component
//
import React from 'react';

// PUBLIC_INTERFACE
function GunSelect() {
    /**
     * Weapon/gun selection screen, listing available weapons/icons.
     * UI and logic to be implemented.
     */
    return (
        <div className="gun-select-screen" data-testid="gun-select">
            <h2>Select Your Weapon</h2>
            <div className="gun-list">
                {/* Placeholder: Weapon preview tiles */}
                <div className="gun-card placeholder">Assault Rifle</div>
                <div className="gun-card placeholder">Shotgun</div>
                <div className="gun-card placeholder">Sniper Rifle</div>
            </div>
            <button className="to-arena btn">Ready: Start Battle</button>
        </div>
    );
}

export default GunSelect;
