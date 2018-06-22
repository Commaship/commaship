class Question {
  constructor(text) {
    this.text = text
  }
}

class Dialogue {
  constructor(generator) {
    this._generator = generator;
  }

  run() {
    return this._generator()
  }
}

export default {
  Question,
  Dialogue,
}