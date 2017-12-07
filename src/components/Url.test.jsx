import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { Url } from "./Url";

it("renders without loading", () => {
    const url = shallow(
        <Url
         id="some-id"
         loading={false}
        />
    );

    assert.equal(url.find("input").prop("value"), "#some-id");
    assert.equal(url.find("i.fa-circle-o-notch").length, 0);
});

it("renders with loading", () => {
    const url = shallow(
        <Url
         id="some-id"
         loading={true}
        />
    );

    assert.equal(url.find("input").prop("value"), "#some-id");
    assert.equal(url.find("i.fa-circle-o-notch").length, 1);
});
