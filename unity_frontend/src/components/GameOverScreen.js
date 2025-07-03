//
// GameOverScreen.js
//
// Skeleton file for Game Over UI component
//
import React from 'react';

// PUBLIC_INTERFACE
function GameOverScreen() {
    /**
     * Game Over screen: shows defeat message, score, and action buttons.
     * UI and logic to be implemented.
     */
    return (
        <div className="gameover-screen" data-testid="gameover-screen">
            <h1>Game Over</h1>
            <div className="score-placeholder">Score: --</div>
            {/* Action Buttons */}
            <div className="gameover-actions">
                <button className="btn">Restart</button>
                <button className="btn">Return to Menu</button>
            </div>
        </div>
    );
}

export default GameOverScreen;
