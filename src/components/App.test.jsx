import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { App } from "./App";
import Game from "./Game";
import Url from "./Url";
import { noop } from "lodash/fp";
import { PAPER, ROCK } from "../game";

it("renders without crashing", () => {
    const app = shallow(<App dispatch={noop} />);
    assert.equal(app.find(".hero").hasClass("is-primary"), true);
    assert.equal(app.find(Url).length, 1);
    assert.equal(app.find(Game).length, 0);
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