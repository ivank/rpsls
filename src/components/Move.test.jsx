import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import Move from "./Move";
import { ACTIVE, ROCK } from "../game";

it("renders with move", () => {
    const url = shallow(<Move move={ROCK} />);
    assert.equal(url.find("i").hasClass("fa-hand-rock-o"), true);
});

it("renders without move", () => {
    const url = shallow(<Move move={ACTIVE} />);
    assert.equal(url.find("i").hasClass("fa-question"), true);
});
