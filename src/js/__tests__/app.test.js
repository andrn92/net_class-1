import Character from '../Character.js'
import Bowman from '../Bowman.js'
import Magician from '../Magician.js'
import Swordsman from '../Swordsman.js'
import Undead from '../Undead.js'
import Zombie from '../Zombie.js'
import Daemon from '../Daemon.js'

test('Right Bowman', () => {
  const received = new Bowman('bowman1', 'Bowman')
  const expected = {
    name: 'bowman1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  expect(received).toEqual(expected)
})

test('Right Swordsman', () => {
  const received = new Swordsman('swordsman1', 'Swordsman')
  const expected = {
    name: 'swordsman1',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(received).toEqual(expected)
})

test('Right Magician', () => {
  const received = new Magician('magician1', 'Magician')
  const expected = {
    name: 'magician1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  expect(received).toEqual(expected)
})

test('Right Undead', () => {
  const received = new Undead('undead1', 'Undead')
  const expected = {
    name: 'undead1',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  }
  expect(received).toEqual(expected)
})

test('Right Zombie', () => {
  const received = new Zombie('zombie1', 'Zombie')
  const expected = {
    name: 'zombie1',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  }
  expect(received).toEqual(expected)
})

test('Right Daemon', () => {
  const received = new Daemon('daemon1', 'Daemon')
  const expected = {
    name: 'daemon1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  }
  expect(received).toEqual(expected)
})

test('Too short field name', () => {
  expect(() => new Daemon('D', 'Daemon')).toThrow()
})

test('Too long field name', () => {
  expect(() => new Daemon('DaemonDaemonovich', 'Daemon')).toThrow()
})

test('Wrong type field name', () => {
  expect(() => new Daemon(123, 'Daemon')).toThrow()
})

test("Type does't belong to the list", () => {
  expect(() => new Daemon('daemon', 'Tanker')).toThrow()
})

test('Wrong type field type', () => {
  expect(() => new Daemon('daemon', 123)).toThrow()
})
