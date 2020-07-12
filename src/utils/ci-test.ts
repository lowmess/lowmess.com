// This file should fail the CI build
const thing = false
const round = (p: number) => p * p

round('hi')

round = 42
