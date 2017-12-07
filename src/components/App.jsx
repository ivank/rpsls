import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "../actions";
import { trimCharsStart, pick } from "lodash/fp";
import classnames from "classnames";
import Game from "./Game";
import Url from "./Url";

/**
 * Main component. Changes background based on game state
 * using the isFinished, isWon and isDraw props
 *
 * Shows a url field, when opponent shows up, switches to game state
 */
export class App extends Component {
    /**
     * Initialize action, based on
     * whether it was a initial page load
     * or a challange from another player
     */
    componentDidMount() {
        const initialId = trimCharsStart("#", window.location.hash);
        this.props.dispatch(init(initialId));
    }

    render() {
        const { isWon, isDraw, isFinished, opponent } = this.props;

        return (
            <div>
                <section
                 className={classnames("hero", {
                    "is-primary": !isFinished,
                    "is-success": isWon,
                    "is-warning": isDraw,
                    "is-danger": isFinished && !isWon && !isDraw,
                 })}>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-centered">
                                <div className="column is-three-quarters-tablet is-half-desktop">
                                    <h1 className="title">Rock Paper Scissors Lizard Spock</h1>
                                    <h2 className="subtitle">A Game</h2>

                                    {opponent ? (
                                        <Game />
                                    ) : (
                                        <div className="content">
                                            <p>
                                                Send this URL to your friend, then wait here for
                                                them to show up.
                                            </p>
                                            <Url />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters-tablet is-half-desktop">
                                <div className="content">
                                    <h3>The rules</h3>
                                    <p>
                                        Scissors cuts paper. Paper covers rock. Rock crushes lizard.
                                        Lizard poisons Spock. Spock smashes scissors. Scissors
                                        decapitates lizard. Lizard eats paper. Paper disproves
                                        Spock. Spock vaporizes rock. Rock crushes scissors.
                                    </p>
                                    <h3>Popularized by The Big Bang Theory</h3>
                                    <a
                                     href="https://www.youtube.com/watch?v=E9oNnKxhDcI"
                                     target="_blank"
                                     rel="noopener noreferrer">
                                        Watch video for a fun rules explanation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = pick(["opponent", "isWon", "isDraw", "isFinished"]);

export default connect(mapStateToProps)(App);
