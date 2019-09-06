
module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      esModuleInterop: false,
      module: 'amd',
      babelConfig: {
        plugins: ['babel-plugin-rewire']
      }
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'ts-jest',
  reporters: ['default'],
  rootDir: 'src',
  testMatch: ['<rootDir>/**/?(*.)+(spec|test).ts?(x)'],
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest'
  },
  verbose: true
};
