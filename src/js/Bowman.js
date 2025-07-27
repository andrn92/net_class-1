import Character from './Character.js'

export default class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence)
      this.attack = 25
      this.defence = 25
  }
}
