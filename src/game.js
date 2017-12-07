import { isEqual, has, find, keys, sample } from "lodash/fp";

export const ACTIVE = "a";
export const ROCK = "r";
export const PAPER = "p";
export const SCISSORS = "x";
export const LIZARD = "l";
export const SPOCK = "s";

export const NAMES = {
    [ROCK]: "rock",
    [PAPER]: "paper",
    [SCISSORS]: "scissors",
    [LIZARD]: "lizard",
    [SPOCK]: "spock",
};

const STRENGTHS = [
    [SCISSORS, PAPER],
    [PAPER, ROCK],
    [ROCK, LIZARD],
    [LIZARD, SPOCK],
    [SPOCK, SCISSORS],
    [SCISSORS, LIZARD],
    [LIZARD, PAPER],
    [PAPER, SPOCK],
    [SPOCK, ROCK],
    [ROCK, SCISSORS],
];

export function isMove(move) {
    return has(move, NAMES);
}

export function randomMove() {
    return sample(keys(NAMES));
}

/**
 * Campare two moves to see if you win
 * It also returns false if its a draw or not all players have moves
 *
 * @param  {string} a
 * @param  {string} b
 * @return {boolean}
 */
export function compare(a, b) {
    return Boolean(find(isEqual([a, b]), STRENGTHS));
}
