export default class Character {
  constructor(name, type, health=100, level=1, attack=10, defence=10) {
    if (typeof name === 'string' && typeof type === 'string' && name.length > 1 && name.length < 11 && ['Character', 'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.name = name
      this.type = type
    } else {
      throw new Error("Incorrect data!")
    }
    this.health = health
    this.level = level
    this.attack = attack
    this.defence = defence
  }
}
