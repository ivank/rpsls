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
                    {isWon ? "You won!" : isDraw ? "It's a draw" : "You lost!"}
                </div>

                <div
                 className={classnames("game-item game-rock", { "is-active": player === ROCK })}
                 onClick={() => dispatch(performMove(ROCK))}>
                    <Move move={ROCK} />
                </div>

                <div
                 className={classnames("game-item game-paper", { "is-active": player === PAPER })}
                 onClick={() => dispatch(performMove(PAPER))}>
                    <Move move={PAPER} />
                </div>

                <div
                 className={classnames("game-item game-scissors", {
                    "is-active": player === SCISSORS,
                 })}
                 onClick={() => dispatch(performMove(SCISSORS))}>
                    <Move move={SCISSORS} />
                </div>

                <div
                 className={classnames("game-item game-lizard", { "is-active": player === LIZARD })}
                 onClick={() => dispatch(performMove(LIZARD))}>
                    <Move move={LIZARD} />
                </div>

                <div
                 className={classnames("game-item game-spock", { "is-active": player === SPOCK })}
                 onClick={() => dispatch(performMove(SPOCK))}>
                    <Move move={SPOCK} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = pick(["player", "opponent", "isPlayed", "isFinished", "isWon", "isDraw"]);

export default connect(mapStateToProps)(Game);
