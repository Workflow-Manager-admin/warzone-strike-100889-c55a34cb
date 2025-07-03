# Architecture Overview: Warzone Strike Unity Frontend

## 1. High-Level Application Flow

The `unity_frontend` is a client-side React application orchestrating the 3D game, featuring animated landing, selection interfaces, an in-game arena, enemy AI, first/third-person camera mechanics, and interactive overlays. It has no backend, with all UI logic, game state, and persistence handled locally through React Context and local storage.

**Major flow:**

- **Landing → Selection → Gameplay (Arena) → Overlay (HUD, Game Over, Victory, Settings)**
- State transitions are orchestrated centrally in the `GameContext`, which acts as the global "game state" store accessible to all components.

```mermaid
flowchart TD
    LS[LandingScreen] --> CS[CharacterSelect]
    CS --> GS[GunSelect]
    GS --> ARENA[Arena (3D)]
    ARENA --> HUD
    ARENA --> PC[Player]
    ARENA --> EN[Enemy]
    ARENA --> WEAP[Weapon]
    ARENA --> CAM[CameraController]
    ARENA --> AUD[AudioManager]
    ARENA --> AI[AIController]
    HUD --> GO[GameOverScreen]
    HUD --> VC[VictoryScreen]
    GO -->|Restart| LS
    VC -->|Restart| LS
    HUD -.-> SET[SettingsMenu]
    LS -.-> SET
    SET -.-> LS
```

## 2. Key Components & their Roles

- **LandingScreen**: Splash/title screen with animated/cinematic visuals and navigation to Play or Settings.
- **CharacterSelect**: Lets user preview avatars and pick a character; selection is stored in context.
- **GunSelect**: Shows firearm options, allowing user to select weapon and preview stats; selection is also stored in context.
- **Arena**: Core 3D game world, assembling the Player, Enemy (AI), obstacles, and handling 3D render logic via `EngineProvider` (using react-three-fiber).
- **Player**: Local logic module for player's position, health, input response, shooting, and state.
- **Enemy**: Individual enemy logic, responding to AIController and interacting with Player within Arena.
- **Weapon**: Module handling weapon stats, firing logic, reloading, and ammo tracking.
- **HUD (overlay)**: UI showing player's live stats—health, ammo, weapon, score, current view mode.
- **CameraController**: Logic for switching between FPS and third-person perspectives, manipulating view in the arena.
- **AIController**: Directs all enemy/bot behaviors: patrolling, detecting the player, and attacking.
- **AudioManager**: Plays background music and SFX, controlled via Settings and in-game triggers.
- **SettingsMenu**: Overlay for volume/music/options, available from landing or pause; can update settings in context.
- **GameOverScreen / VictoryScreen**: Shown on player defeat or win, presenting score and restart/menu actions. 
- **GameContext**: Central store and reducer for stage, player and game state, selections, and settings (see `src/game/GameContext.js`). All screen transitions and in-session stat updates are driven through context and dispatched actions.

## 3. Controllers, Context, and Module Interactions

- **Controllers (AI, Camera, Audio)**: Invoked by Arena or Player logic, modifying the world state, emitting events (e.g., camera changes, triggering sounds), or updating the context to reflect changes (e.g., health loss).
- **Context**: The heart of data flow—screen transitions, selections, stats, and settings updates are propagated by dispatching actions to the `GameContext`. Components consume or update context as needed to stay fully in sync (e.g., HUD always reflects latest context values).
- **Modules (Arena, Player, Enemy, Weapon)**: Abstracted as separate logic units (see `src/game/`). Each interacts with the context and might update each other's state by dispatching to context, or using local functions and events for 3D world interactions.
- **EngineProvider**: Wraps the Arena and its entities inside the react-three-fiber Canvas, providing the rendering context and main update loop for 3D visuals.

## 4. User Journey

1. **Landing Screen**: Animated splash, access to Play or Settings.
2. **Character Selection**: Choose an avatar, selection stored globally.
3. **Gun Selection**: Pick weapon, selection also saved.
4. **Arena / Gameplay**: 3D world with player and AI enemies, overlays show live stats; user can pause for Settings, and camera shifts as per control/user toggle.
5. **Game End & Overlays**: HUD detects state via context. GameOver or Victory overlays appear with session stats and calls to restart or return to menu.

## 5. Data & State Management

- **Global Context Reducer**: The reducer in `GameContext.js` governs all updates—screen navigation, stat changes, user options. All key modules/components use context for synchronization.
- **No Backend**: Persistence (if any) uses local storage APIs; selections and settings are read/written locally.

## 6. Major Component Relationships Overview

- All screens (Landing, Selection, Arena, Overlays) are organized in a stepwise flow, with the current "stage" in context determining which UI is active.
- The Arena module instantiates Player, Enemy, Weapon, and their respective logic/controllers inside the render tree.
- HUD is always overlaid during gameplay, subscribing to and displaying data from GameContext.
- Overlays (GameOver, Victory, Settings) "capture" user input when active and push changes back into context on action.

---

## 7. Extensibility & Modularity

- New screens, overlays, and arena features can be added as decoupled components.
- All player/enemy/weapon logic is modular for new content or feature expansion.
- 3D assets and utility modules (AI, audio, camera) can be swapped or extended independently.

---

## 8. References

- Main game state logic: `src/game/GameContext.js`
- 3D rendering entrypoint: `src/game/EngineProvider.js`
- Module/component stubs: `src/game/`, UI stubs: `src/components/`
- See `README.md` for setup and customization

