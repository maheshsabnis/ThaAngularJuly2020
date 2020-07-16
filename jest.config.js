// load the jest utilities
// pathsToModuleNameMapper, map all the ModuleNames from varios
// test files and load them in Unit Test
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// load the compilerOptions from the tsconfig
// using compilerOpetion ts-jest will transpiles
// unit test files into js
const { compilerOptions } = require('./tsconfig.app.json');
// mycomponent.spec.ts
module.exports = {
    preset: 'jest-preset-angular', // adapter between jset and angular
    roots: ['<rootDir>/src/'], // the root path to load test from
    testMatch: ['**/+(*.)+(spec).+(ts)'], // test file name and expension
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'], // test env
    collectCoverage: true, // code coverage from unit test
    coverageReporters: ['html'], // code coverage test file
    coverageDirectory: 'coverage/myngapp', // directory for storing coverage reports
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/'
    })
};