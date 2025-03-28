module.exports = {
    require: 'ts-node/register',
    extension: ['ts'],
    spec: 'src/test/**/*.test.ts',
    timeout: 5000,
    ui: 'tdd' // Добавляем интерфейс TDD
  };