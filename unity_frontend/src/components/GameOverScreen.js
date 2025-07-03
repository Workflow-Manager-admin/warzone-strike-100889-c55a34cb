//
// GameOverScreen.js
//
// Skeleton file for Game Over UI component
//
import React from 'react';

// PUBLIC_INTERFACE
import { useGameContext } from "../game/GameContext";

function GameOverScreen() {
    /**
     * Game Over screen: shows defeat message, score, and action buttons.
     * "Restart" brings you back to character select, "Return to Menu" → landing.
     */
    const { dispatch } = useGameContext();

    const handleRestart = () => {
        dispatch({ type: "SET_STAGE", payload: "character-select" });
    };

    const handleMenu = () => {
        dispatch({ type: "SET_STAGE", payload: "landing" });
    };

    return (
        <div className="gameover-screen" data-testid="gameover-screen">
            <h1>Game Over</h1>
            <div className="score-placeholder">Score: --</div>
            {/* Action Buttons */}
            <div className="gameover-actions">
                <button className="btn" onClick={handleRestart}>Restart</button>
                <button className="btn" onClick={handleMenu}>Return to Menu</button>
            </div>
        </div>
    );
}

export default GameOverScreen;
