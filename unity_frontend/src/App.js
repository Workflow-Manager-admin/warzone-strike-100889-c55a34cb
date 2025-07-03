import React, { useState, useEffect } from 'react';
import './App.css';

// Game context provider and UI screens
import { GameProvider, useGameContext } from './game/GameContext';
import LandingScreen from './components/LandingScreen';
import CharacterSelect from './components/CharacterSelect';
import GunSelect from './components/GunSelect';
import Arena from './game/Arena';
import HUD from './components/overlays/HUD';
import SettingsMenu from './components/SettingsMenu';
import GameOverScreen from './components/GameOverScreen';
import VictoryScreen from './components/VictoryScreen';

// PUBLIC_INTERFACE
function MainGameEntrypoint() {
  const [theme, setTheme] = useState('light');
  const { state } = useGameContext();

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Render appropriate screen based on "stage" state in context
  let screen = null;
  switch (state.stage) {
    case 'character-select':
      screen = <CharacterSelect />;
      break;
    case 'gun-select':
      screen = <GunSelect />;
      break;
    case 'arena':
      screen = (
        <>
          <Arena />
          <HUD />
        </>
      );
      break;
    case 'settings':
      screen = <SettingsMenu />;
      break;
    case 'gameover':
      screen = <GameOverScreen />;
      break;
    case 'victory':
      screen = <VictoryScreen />;
      break;
    case 'landing':
    default:
      screen = <LandingScreen />;
      break;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {screen}
      </header>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Root App component: wraps app with GameProvider for global state/context.
   */
  return (
    <GameProvider>
      <MainGameEntrypoint />
    </GameProvider>
  );
}

export default App;
