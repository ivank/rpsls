import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { noop } from "lodash/fp";
import { Game } from "./Game";
import { ACTIVE, ROCK, PAPER } from "../game";

it("renders played", () => {
    const game = shallow(
        <Game
         isPlayed={true}
         player={ROCK}
         dispatch={noop}
        />
    );
    assert.equal(game.hasClass("is-played"), true);
    assert.equal(game.find(".is-active").hasClass("game-rock"), true);
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
    assert.equal(game.find(".game-result").text(), "You lost!");
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
    assert.equal(game.find(".game-result").text(), "It's a draw");
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
    assert.equal(game.find(".game-result").text(), "You won!");
});
