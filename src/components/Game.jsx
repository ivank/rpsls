import React from "react";
import "./Game.css";
import { connect } from "react-redux";
import { ROCK, PAPER, SCISSORS, LIZARD, SPOCK } from "../game";
import Move from "./Move";
import { performMove } from "../actions";
import { pick } from "lodash/fp";
import classnames from "classnames";

export function Game({ player, opponent, isPlayed, isFinished, isWon, isDraw, dispatch }) {
    return (
        <div className={classnames("game", { "is-played": isPlayed, "is-finished": isFinished })}>
            <div className="game-body">
                <div className="game-opponent">
                    <Move move={opponent} />
                </div>

                <div className="game-vs">
                    <strong>VS.</strong>
                </div>

                <div className="game-result has-text-centered">
                    {isWon ? "You have won" : isDraw ? "Its a draw" : "You have lost"}
                </div>

                <div
                 className={classnames("game-item game-rock", { "is-active": player === ROCK })}>
                    <Move
                     move={ROCK}
                     onClick={() => dispatch(performMove(ROCK))}
                    />
                </div>

                <div
                 className={classnames("game-item game-paper", { "is-active": player === PAPER })}>
                    <Move
                     move={PAPER}
                     onClick={() => dispatch(performMove(PAPER))}
                    />
                </div>

                <div
                 className={classnames("game-item game-scissors", {
                    "is-active": player === SCISSORS,
                 })}>
                    <Move
                     move={SCISSORS}
                     onClick={() => dispatch(performMove(SCISSORS))}
                    />
                </div>

                <div
                 className={classnames("game-item game-lizard", { "is-active": player === LIZARD })}>
                    <Move
                     move={LIZARD}
                     onClick={() => dispatch(performMove(LIZARD))}
                    />
                </div>

                <div
                 className={classnames("game-item game-spock", { "is-active": player === SPOCK })}>
                    <Move
                     move={SPOCK}
                     onClick={() => dispatch(performMove(SPOCK))}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = pick(["player", "opponent", "isPlayed", "isFinished", "isWon", "isDraw"]);

export default connect(mapStateToProps)(Game);
