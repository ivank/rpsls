import React from "react";
import { connect } from "react-redux";
import { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } from "../game";
import Move from "./Move";
import { performMove } from "../actions";

export function Moves({ dispatch }) {
    return (
        <div>
            <Move
             move={ROCK}
             onClick={() => dispatch(performMove(ROCK))}
            />
            <Move
             move={PAPER}
             onClick={() => dispatch(performMove(PAPER))}
            />
            <Move
             move={SCISSORS}
             onClick={() => dispatch(performMove(SCISSORS))}
            />
            <Move
             move={LIZARD}
             onClick={() => dispatch(performMove(LIZARD))}
            />
            <Move
             move={SPOCK}
             onClick={() => dispatch(performMove(SPOCK))}
            />
        </div>
    );
}

export default connect()(Moves);
