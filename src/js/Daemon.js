import Character from './Character.js'

export default class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence)
      this.defence = 40
  }
}
