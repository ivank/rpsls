import { isEqual, has, find } from "lodash/fp";

export const ACTIVE = "0";
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

export function compare(a, b) {
    if (!isMove(a)) {
        throw new Error(`Invalid move "${a}" for player 1`);
    }

    if (!isMove(b)) {
        throw new Error(`Invalid move "${b}" for player 2`);
    }

    return Boolean(find(isEqual([a, b]), STRENGTHS));
}
