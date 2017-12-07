import { ACTIVE, ROCK, PAPER, SCISSORS, LIZARD, SPOCK, NAMES } from "./game";
import {
    INIT_PLAYER_1,
    INIT_PLAYER_2,
    PLAYER_1,
    PLAYER_2,
    MOVE,
    SINGLE_PLAYER,
    RESET,
} from "./actions";
import reducers, { setGameState } from "./reducers";
import assert from "assert";

const testGameState = [
    {
        name: "before any moves",
        state: { p1: ACTIVE, p2: ACTIVE, p: "p1" },
        expected: {
            p1: ACTIVE,
            p2: ACTIVE,
            p: "p1",
            player: ACTIVE,
            opponent: ACTIVE,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "started playing",
        state: { p1: ROCK, p2: ACTIVE, p: "p1" },
        expected: {
            p1: ROCK,
            p2: ACTIVE,
            p: "p1",
            player: ROCK,
            opponent: ACTIVE,
            isFinished: false,
            isPlayed: true,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "opponent played",
        state: { p1: ROCK, p2: ACTIVE, p: "p2" },
        expected: {
            p1: ROCK,
            p2: ACTIVE,
            p: "p2",
            player: ACTIVE,
            opponent: ROCK,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "draw",
        state: { p1: ROCK, p2: ROCK, p: "p2" },
        expected: {
            p1: ROCK,
            p2: ROCK,
            p: "p2",
            player: ROCK,
            opponent: ROCK,
            isFinished: true,
            isPlayed: true,
            isWon: false,
            isDraw: true,
        },
    },
    {
        name: "win",
        state: { p1: ROCK, p2: PAPER, p: "p2" },
        expected: {
            p1: ROCK,
            p2: PAPER,
            p: "p2",
            player: PAPER,
            opponent: ROCK,
            isFinished: true,
            isPlayed: true,
            isWon: true,
            isDraw: false,
        },
    },
];

testGameState.forEach(test => {
    it(`Test game state with ${test.name}`, () => {
        const result = setGameState(test.state);
        assert.deepEqual(result, test.expected);
    });
});

const testReducers = [
    {
        name: "init player 1",
        state: {},
        action: { type: INIT_PLAYER_1, id: "id1" },
        expected: { id: "id1", p: "p1", p1: ACTIVE, loading: true },
    },
    {
        name: "init player 2",
        state: {},
        action: { type: INIT_PLAYER_2, id: "id2" },
        expected: { id: "id2", p: "p2", p2: ACTIVE, loading: true },
    },
    {
        name: "player 1 moves",
        state: { p: "p2", p2: ACTIVE },
        action: { type: PLAYER_1, move: ROCK },
        expected: {
            p: "p2",
            p2: ACTIVE,
            p1: ROCK,
            loading: false,
            player: ACTIVE,
            opponent: ROCK,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "player 2 moves",
        state: { p: "p1", p1: ACTIVE },
        action: { type: PLAYER_2, move: ROCK },
        expected: {
            p: "p1",
            p2: ROCK,
            p1: ACTIVE,
            loading: false,
            player: ACTIVE,
            opponent: ROCK,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "player moves",
        state: { p: "p1", p1: ACTIVE, p2: PAPER },
        action: { type: MOVE, move: ROCK },
        expected: {
            p: "p1",
            p2: PAPER,
            p1: ROCK,
            player: ROCK,
            opponent: PAPER,
            isFinished: true,
            isPlayed: true,
            isWon: false,
            isDraw: false,
        },
    },
    {
        name: "single player",
        state: { p: "p1", p1: ACTIVE },
        action: { type: SINGLE_PLAYER },
        expected: {
            p: "p1",
            p2: ACTIVE,
            p1: ACTIVE,
            player: ACTIVE,
            opponent: ACTIVE,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
            isSinglePlayer: true,
        },
    },
    {
        name: "single player reset",
        state: {
            p: "p1",
            p1: ROCK,
            p2: SCISSORS,
            isFinished: true,
            isWon: false,
            isDraw: false,
            isPlayed: true,
            isSinglePlayer: true,
        },
        action: { type: RESET },
        expected: {
            p: "p1",
            p2: ACTIVE,
            p1: ACTIVE,
            player: ACTIVE,
            opponent: ACTIVE,
            isFinished: false,
            isPlayed: false,
            isWon: false,
            isDraw: false,
            isSinglePlayer: true,
        },
    },
];

testReducers.forEach(test => {
    it(`Test reducers for ${test.name}`, () => {
        const result = reducers(test.state, test.action);
        assert.notStrictEqual(result, test.state);
        assert.deepEqual(result, test.expected);
    });
});

it("Test reducers without action", () => {
    const state = { p: "p1", p1: ACTIVE, p2: PAPER };
    const result = reducers(state, { type: "SOMETHING ERROR" });
    assert.strictEqual(result, state);
});
