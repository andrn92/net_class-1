import Character from './Character.js'

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence)
      this.attack = 40
  }
}
