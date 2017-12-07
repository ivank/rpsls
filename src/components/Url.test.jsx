import { shallow } from "enzyme";
import React from "react";
import assert from "assert";
import { Url } from "./Url";
import copyToClipboard from "copy-to-clipboard";

jest.mock("copy-to-clipboard", () => jest.fn());

it("renders without loading", () => {
    const url = shallow(
        <Url
         id="some-id"
         loading={false}
        />
    );

    assert.equal(url.find("input").prop("value"), "https://rpsls.ikerin.com#some-id");
    assert.equal(url.find("i.fa-circle-o-notch").length, 0);

    url.find("button").simulate("click");
    assert.equal(copyToClipboard.mock.calls.length, 1);
});

it("renders with loading", () => {
    const url = shallow(
        <Url
         id="some-id"
         loading={true}
        />
    );

    assert.equal(url.find("input").prop("value"), "https://rpsls.ikerin.com#some-id");
    assert.equal(url.find("i.fa-circle-o-notch").length, 1);
});
