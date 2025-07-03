//
// GameContext.js
//
// Provides global game state and context for gameplay, selection, and settings.
//
import React, { createContext, useContext, useReducer } from "react";

/**
 * PUBLIC_INTERFACE
 * Represents the global game state model.
 */
const initialGameState = {
  // Session info
  stage: "landing", // "landing", "character-select", "gun-select", "arena", "gameover", "victory"
  // Player selections
  selectedCharacter: null,
  selectedWeapon: null,
  // Gameplay stats
  player: {
    health: 100,
    ammo: 30,
    score: 0,
    weapon: null,
  },
  // Settings
  settings: {
    musicEnabled: true,
    sfxEnabled: true,
    volume: 0.8,
    cameraMode: "third-person", // "fps" or "third-person"
  },
  // Extend with more, e.g., enemies, arena state, overlays etc.
};

/**
 * Global state reducer for modifications to game state.
 */
function gameReducer(state, action) {
  switch (action.type) {
    case "SET_STAGE":
      return { ...state, stage: action.payload };
    case "SELECT_CHARACTER":
      return { ...state, selectedCharacter: action.payload };
    case "SELECT_WEAPON":
      return { ...state, selectedWeapon: action.payload };
    case "UPDATE_PLAYER":
      return { ...state, player: { ...state.player, ...action.payload } };
    case "SET_SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.payload } };
    // Add additional cases (reset, enemy updates, overlay, etc)
    default:
      return state;
  }
}

// Context export
/**
 * PUBLIC_INTERFACE
 * GameContext is a React context for the global game state.
 */
const GameContext = createContext();

/**
 * PUBLIC_INTERFACE
 * Provider for game state/context.
 */
function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useGameContext: convenience hook to use the game context.
 */
function useGameContext() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGameContext must be used within GameProvider");
  return context;
}

export { GameProvider, useGameContext };
export default GameContext;
