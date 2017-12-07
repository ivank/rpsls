import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { noop } from "lodash/fp";
import { Game } from "./Game";
import { performMove, reset } from "../actions";
import { ACTIVE, ROCK, PAPER, SCISSORS, LIZARD, SPOCK, NAMES } from "../game";

jest.mock("../actions", () => ({ performMove: jest.fn(), reset: jest.fn() }));

const testPlayes = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

testPlayes.forEach(test => {
    it(`renders normal ${NAMES[test]}`, () => {
        performMove.mockReset();
        const dispatchMock = jest.fn();
        const game = shallow(
            <Game
             isPlayed={false}
             player={ACTIVE}
             dispatch={dispatchMock}
            />
        );
        game.find(`.game-${NAMES[test]}`).simulate("click");
        assert.equal(performMove.mock.calls[0][0], test);
    });
});

testPlayes.forEach(test => {
    it(`renders played ${NAMES[test]}`, () => {
        const game = shallow(
            <Game
             isPlayed={true}
             player={test}
             dispatch={noop}
            />
        );
        assert.equal(game.hasClass("is-played"), true);
        assert.equal(game.find(".is-active").hasClass(`game-${NAMES[test]}`), true);
    });
});

it("renders lost", () => {
    const game = shallow(
        <Game
         isFinished={true}
         dispatch={noop}
         player={ROCK}
         opponent={PAPER}
        />
    );
    assert.equal(game.hasClass("is-finished"), true);
    assert.equal(game.find(".is-active").hasClass("game-rock"), true);
    assert.equal(game.find(".game-result span").text(), "You lost!");
});

it("renders draw", () => {
    const game = shallow(
        <Game
         isFinished={true}
         dispatch={noop}
         player={ROCK}
         opponent={ROCK}
         isDraw={true}
        />
    );
    assert.equal(game.hasClass("is-finished"), true);
    assert.equal(game.find(".is-active").hasClass("game-rock"), true);
    assert.equal(game.find(".game-result span").text(), "It's a draw");
});

it("renders victory", () => {
    const game = shallow(
        <Game
         isFinished={true}
         dispatch={noop}
         player={PAPER}
         opponent={ROCK}
         isWon={true}
        />
    );
    assert.equal(game.hasClass("is-finished"), true);
    assert.equal(game.find(".is-active").hasClass("game-paper"), true);
    assert.equal(game.find(".game-result span").text(), "You won!");
});

it("renders victory in single player and resets", () => {
    const dispatchMock = jest.fn();
    const game = shallow(
        <Game
         isFinished={true}
         dispatch={dispatchMock}
         player={PAPER}
         opponent={ROCK}
         isWon={true}
         isSinglePlayer={true}
        />
    );
    assert.equal(game.hasClass("is-finished"), true);
    assert.equal(game.find(".is-active").hasClass("game-paper"), true);
    assert.equal(game.find(".game-result span").text(), "You won!");
    assert.equal(game.find(".game-result button").length, 1);

    game.find(".game-result button").simulate("click");
    assert.equal(reset.mock.calls.length, 1);
});
