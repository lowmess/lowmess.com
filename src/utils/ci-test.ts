// This file should fail the CI build
const round = (p: number) => p * p

round('hi')

round = 42
