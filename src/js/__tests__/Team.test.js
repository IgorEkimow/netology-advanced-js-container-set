import Team from '../Team';
import Daemon from '../Daemon';
import Swordsman from '../Swordsman';
import Zombie from '../Zombie';

test('Expected add a new character to the team', () => {
  const team = new Team();
  const daemon = new Daemon('Alex', 'Daemon');
  team.add(daemon);
  const expected = [{
    name: 'Alex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }];
  expect(team.toArray()).toEqual(expected);
});

test('Expected throw an error cause a character is already exists in the team', () => {
  const team = new Team();
  team.add({
    name: 'Daniel',
    type: 'Swordsman',
    health: 100,
    level: 5,
    attack: 40,
    defence: 10,
  });
  expect(() => {
    team.add({
      name: 'Daniel',
      type: 'Swordsman',
      health: 100,
      level: 5,
      attack: 40,
      defence: 10,
    });
  }).toThrowError('Ошибка! Tакой персонаж уже существует в команде');
});

test('Expected add all characters', () => {
  const team = new Team();
  const daemon = new Daemon('Alex', 'Daemon');
  const swordsman = new Swordsman('Daniel', 'Swordsman');
  const zombie = new Zombie('Nick', 'Zombie');
  const characters = [daemon, swordsman, zombie];
  team.addAll(characters);
  const expected = [
    {
      name: 'Alex',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Daniel',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Nick',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});
