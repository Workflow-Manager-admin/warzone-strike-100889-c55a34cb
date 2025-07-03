//
// VictoryScreen.js
//
// Skeleton file for Victory (Win) Screen UI component
//
import React from 'react';

// PUBLIC_INTERFACE
import { useGameContext } from "../game/GameContext";

function VictoryScreen() {
    /**
     * Victory screen: congratulates player, shows final score, restart/menu actions.
     * "Play Again" → character select, "Return to Menu" → landing.
     */
    const { dispatch } = useGameContext();

    const handlePlayAgain = () => {
        dispatch({ type: "SET_STAGE", payload: "character-select" });
    };

    const handleMenu = () => {
        dispatch({ type: "SET_STAGE", payload: "landing" });
    };

    return (
        <div className="victory-screen" data-testid="victory-screen">
            <h1>Victory!</h1>
            <div className="score-placeholder">Score: --</div>
            {/* Action Buttons */}
            <div className="victory-actions">
                <button className="btn" onClick={handlePlayAgain}>Play Again</button>
                <button className="btn" onClick={handleMenu}>Return to Menu</button>
            </div>
        </div>
    );
}

export default VictoryScreen;
