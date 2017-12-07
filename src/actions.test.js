import { init, performMove, MOVE, INIT_PLAYER_1, INIT_PLAYER_2 } from "./actions";
import { ROCK } from "./game";
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
