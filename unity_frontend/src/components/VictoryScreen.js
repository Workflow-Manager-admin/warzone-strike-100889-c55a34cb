//
// VictoryScreen.js
//
// Skeleton file for Victory (Win) Screen UI component
//
import React from 'react';

// PUBLIC_INTERFACE
function VictoryScreen() {
    /**
     * Victory screen: congratulates player, shows final score, restart/menu actions.
     * UI and logic to be implemented.
     */
    return (
        <div className="victory-screen" data-testid="victory-screen">
            <h1>Victory!</h1>
            <div className="score-placeholder">Score: --</div>
            {/* Action Buttons */}
            <div className="victory-actions">
                <button className="btn">Play Again</button>
                <button className="btn">Return to Menu</button>
            </div>
        </div>
    );
}

export default VictoryScreen;
