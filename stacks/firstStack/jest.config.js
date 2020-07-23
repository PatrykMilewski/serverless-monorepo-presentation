module.exports = {
    testEnvironment: "node",
    moduleNameMapper: {
        '~common/(.*)': '<rootDir>/../common/src/$1',
        '~src/(.*)': '<rootDir>/src/$1',
    },
}

process.env = Object.assign(process.env, {
    DEBUG: true,
})
