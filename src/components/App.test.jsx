import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { App } from "./App";
import Game from "./Game";
import Url from "./Url";
import { noop } from "lodash/fp";
import { PAPER, ROCK } from "../game";
import { singlePlayer } from "../actions";

jest.mock("../actions", () => ({ init: jest.fn(), singlePlayer: jest.fn() }));

it("renders without crashing and start single player", () => {
    const dispatchMock = jest.fn();
    const app = shallow(<App dispatch={dispatchMock} />);
    assert.equal(app.find(".hero").hasClass("is-primary"), true);
    assert.equal(app.find(Url).length, 1);
    assert.equal(app.find(Game).length, 0);
    assert.equal(app.find("#single-player-button").length, 1);
    app.find("#single-player-button").simulate("click");
    assert.equal(singlePlayer.mock.calls.length, 1);
});

it("renders victory", () => {
    const app = shallow(
        <App
         dispatch={noop}
         isWon={true}
         player={PAPER}
         opponent={ROCK}
        />
    );
    assert.equal(app.find(".hero").hasClass("is-success"), true);
    assert.equal(app.find(Url).length, 0);
    assert.equal(app.find(Game).length, 1);
});

it("renders loss", () => {
    const app = shallow(
        <App
         dispatch={noop}
         isWon={true}
         player={ROCK}
         opponent={PAPER}
        />
    );
    assert.equal(app.find(".hero").hasClass("is-success"), true);
    assert.equal(app.find(Url).length, 0);
    assert.equal(app.find(Game).length, 1);
});

it("renders draw", () => {
    const app = shallow(
        <App
         dispatch={noop}
         isFinished={true}
         isWon={false}
         isDraw={true}
         player={ROCK}
         opponent={ROCK}
        />
    );
    assert.equal(app.find(".hero").hasClass("is-warning"), true);
    assert.equal(app.find(Url).length, 0);
    assert.equal(app.find(Game).length, 1);
});
