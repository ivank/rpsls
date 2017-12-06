import React from "react";
import classnames from "classnames";
import { ACTIVE, ROCK, PAPER, SCISSORS, LIZARD, SPOCK } from "../game";

const icons = {
    [ROCK]: "fa-hand-rock-o",
    [PAPER]: "fa-hand-paper-o",
    [SCISSORS]: "fa-hand-scissors-o",
    [LIZARD]: "fa-hand-lizard-o",
    [SPOCK]: "fa-hand-spock-o",
    [ACTIVE]: "fa-question",
    [null]: "fa fa-spinner fa-pulse fa-fw",
};

export default function Move({ move, className, ...props }) {
    return (
        <button
         className={classnames("button is-large", className)}
         {...props}>
            <i className={classnames("fa fa-lg", icons[move])} />
        </button>
    );
}
