import {
    init,
    performMove,
    singlePlayer,
    reset,
    MOVE,
    INIT_PLAYER_1,
    INIT_PLAYER_2,
    PLAYER_2,
    SINGLE_PLAYER,
    RESET,
    SINGLE_PLAYER_TIMEOUT,
} from "./actions";
import { ROCK, randomMove } from "./game";
import assert from "assert";
import firebase from "./firebase";

jest.mock("./firebase", () => ({
    database: jest.fn().mockReturnValue({
        ref: jest.fn().mockReturnValue({
            on: jest.fn(),
            set: jest.fn(),
        }),
    }),
}));

jest.mock("./game", () => ({
    ROCK: "r",
    randomMove: jest.fn().mockReturnValue("r"),
}));

jest.useFakeTimers();

jest.mock("shortid", () => ({ generate: jest.fn().mockReturnValue("test-gen-id") }));

it("Test init action without ID", () => {
    const dispatchMock = jest.fn();
    init()(dispatchMock);

    assert.equal(dispatchMock.mock.calls.length, 1);
    assert.deepEqual(dispatchMock.mock.calls[0][0], { type: INIT_PLAYER_1, id: "test-gen-id" });

    assert.equal(dispatchMock.mock.calls.length, 1);
    assert.deepEqual(dispatchMock.mock.calls[0][0], { type: INIT_PLAYER_1, id: "test-gen-id" });
});

it("Test init action with ID", () => {
    const dispatchMock = jest.fn();
    init("test")(dispatchMock);

    assert.equal(dispatchMock.mock.calls.length, 1);
    assert.deepEqual(dispatchMock.mock.calls[0][0], { type: INIT_PLAYER_2, id: "test" });
});

it("Test performMove action", () => {
    const dispatchMock = jest.fn();
    const getState = jest.fn().mockReturnValueOnce({ id: "test1", p: "p1" });
    performMove(ROCK)(dispatchMock, getState);

    assert.equal(dispatchMock.mock.calls.length, 1);
    assert.deepEqual(dispatchMock.mock.calls[0][0], { type: MOVE, move: ROCK });
});

it("Test performMove action in single player", () => {
    const dispatchMock = jest.fn();
    const getState = jest.fn().mockReturnValueOnce({ id: "test1", p: "p1", isSinglePlayer: true });
    performMove(ROCK)(dispatchMock, getState);

    assert.equal(dispatchMock.mock.calls.length, 1);
    assert.deepEqual(dispatchMock.mock.calls[0][0], { type: MOVE, move: ROCK });

    jest.runAllTimers();

    assert.equal(dispatchMock.mock.calls.length, 2);
    assert.equal(randomMove.mock.calls.length, 1);
    assert.deepEqual(setTimeout.mock.calls[0][1], SINGLE_PLAYER_TIMEOUT);
    assert.deepEqual(dispatchMock.mock.calls[1][0], { type: PLAYER_2, move: ROCK });
});

it("Test single player", () => {
    const action = singlePlayer();
    assert.deepEqual(action, { type: SINGLE_PLAYER });
});

it("Test reset", () => {
    const action = reset();
    assert.deepEqual(action, { type: RESET });
});
