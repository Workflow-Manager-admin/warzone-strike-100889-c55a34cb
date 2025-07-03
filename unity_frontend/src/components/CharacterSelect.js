//
// CharacterSelect.js
//
// Skeleton file for Character Selection UI component
//
import React from 'react';

/*
 * CharacterSelect.js
 * Main UI: Character chooser with preview gallery and navigation controls
 */

// PUBLIC_INTERFACE
import { useGameContext } from "../game/GameContext";

function CharacterSelect() {
    /**
     * Character selection screen for picking a player avatar.
     * "Next" advances to gun selection.
     * (In future: record selected character!)
     */
    const { dispatch } = useGameContext();

    const handleNext = () => {
        dispatch({ type: "SET_STAGE", payload: "gun-select" });
    };

    return (
        <div className="character-select-screen" data-testid="character-select">
            <h2>Choose Your Character</h2>
            {/* Placeholder: List of character preview cards */}
            <div className="character-list">
                {/* map from character models in future */}
                <div className="character-card placeholder">Character 1 (Preview)</div>
                <div className="character-card placeholder">Character 2 (Preview)</div>
                <div className="character-card placeholder">Character 3 (Preview)</div>
            </div>
            <button className="to-gun-select btn" onClick={handleNext}>Next: Select Weapon</button>
        </div>
    );
}

export default CharacterSelect;
