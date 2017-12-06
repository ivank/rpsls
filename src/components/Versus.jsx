import React from "react";
import { connect } from "react-redux";
import { get } from "lodash/fp";
import { compare, isMove, ACTIVE } from "../game";
import Move from "./Move";

export function Versus({ player, opponent }) {
    return (
        <div>
            {isMove(player) && isMove(opponent) ? (
                compare(player, opponent) ? (
                    "You Win"
                ) : (
                    "You Loose"
                )
            ) : isMove(opponent) ? (
                <div>
                    <Move move={player} />
                    - VS -
                    <Move move={ACTIVE} />
                </div>
            ) : (
                <div>
                    <Move move={player} />
                    - VS -
                    <Move move={opponent} />
                </div>
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        player: get(state.p, state),
        opponent: get(state.p === "p1" ? "p2" : "p1", state),
    };
}

export default connect(mapStateToProps)(Versus);
