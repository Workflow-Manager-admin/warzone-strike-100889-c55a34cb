//
// models/index.js
//
// Exports basic game asset model stubs (characters, weapons, enemies).
// Expand with actual mesh/model definitions as assets are developed.

// PUBLIC_INTERFACE

// Example: Character Model config (minimal info; replace with actual 3D object later)
export const CHARACTER_MODELS = [
  {
    key: "soldier",
    name: "Elite Soldier",
    traits: ["Agile", "Balanced"],
    // mesh: null,
    // thumb: "soldier-thumb.png"
  },
  {
    key: "sniper",
    name: "Stealth Sniper",
    traits: ["Long Range", "Low Health"],
  },
];

// Example: Weapon Model config (stub info)
export const WEAPON_MODELS = [
  {
    key: "assault_rifle",
    name: "Assault Rifle",
    ammo: 30,
    damage: 15,
    // mesh: null,
  },
  {
    key: "shotgun",
    name: "Shotgun",
    ammo: 8,
    damage: 35,
  },
  {
    key: "sniper_rifle",
    name: "Sniper Rifle",
    ammo: 5,
    damage: 60,
  },
];

// Example: Enemy Model config
export const ENEMY_MODELS = [
  {
    key: "grunt",
    name: "Enemy Grunt",
    traits: ["Basic", "Patroller"],
  },
];

// Export stubs for future actual model/mesh registration
