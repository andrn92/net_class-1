export default class Character {
  constructor(name, type, health=100, level=1, attack=10, defence=10) {
    if (typeof name !== 'string' || typeof type !== 'string' || name.length < 2 || name.length > 10 || !['Character', 'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error("Incorrect data!")
    }
    this.name = name
    this.type = type
    this.health = health
    this.level = level
    this.attack = attack
    this.defence = defence
  }
}
