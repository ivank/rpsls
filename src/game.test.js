import { ROCK, PAPER, SCISSORS, LIZARD, SPOCK, NAMES, compare } from "./game";
import assert from "assert";

const testGames = [
    { p1: ROCK, p2: PAPER, winner: "p2" },
    { p1: ROCK, p2: SCISSORS, winner: "p1" },
    { p1: ROCK, p2: LIZARD, winner: "p1" },
    { p1: ROCK, p2: SPOCK, winner: "p2" },
    { p1: PAPER, p2: ROCK, winner: "p1" },
    { p1: PAPER, p2: SCISSORS, winner: "p2" },
    { p1: PAPER, p2: LIZARD, winner: "p2" },
    { p1: PAPER, p2: SPOCK, winner: "p1" },
    { p1: SCISSORS, p2: ROCK, winner: "p2" },
    { p1: SCISSORS, p2: PAPER, winner: "p1" },
    { p1: SCISSORS, p2: LIZARD, winner: "p1" },
    { p1: SCISSORS, p2: SPOCK, winner: "p2" },
    { p1: LIZARD, p2: ROCK, winner: "p2" },
    { p1: LIZARD, p2: PAPER, winner: "p1" },
    { p1: LIZARD, p2: SCISSORS, winner: "p2" },
    { p1: LIZARD, p2: SPOCK, winner: "p1" },
    { p1: SPOCK, p2: ROCK, winner: "p1" },
    { p1: SPOCK, p2: PAPER, winner: "p2" },
    { p1: SPOCK, p2: SCISSORS, winner: "p1" },
    { p1: SPOCK, p2: LIZARD, winner: "p2" },
];

testGames.forEach(test => {
    it(`Game with p1: ${NAMES[test.p1]} and p2: ${NAMES[test.p2]} winner ${test.winner}`, () => {
        const result = compare(test.p1, test.p2);
        assert.equal(result ? "p1" : "p2", test.winner);
    });
});

it("Throw an error if moves outside of allowed ones", () => {
    assert.throws(() => compare(null, SCISSORS), /player 1/);
    assert.throws(() => compare(ROCK, "132"), /player 2/);
});
