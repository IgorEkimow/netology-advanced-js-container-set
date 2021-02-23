export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((object) => {
      if (JSON.stringify(object) === JSON.stringify(character)) {
        throw new Error('Ошибка! Tакой персонаж уже существует в команде');
      }
    });
    this.members.add(character);
  }

  addAll(character) {
    character.forEach((object) => {
      this.add(object);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
