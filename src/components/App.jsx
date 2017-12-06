import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "../actions";
import { trimCharsStart, pick } from "lodash/fp";
import Game from "./Game";
import classnames from "classnames";
import Url from "./Url";

export class App extends Component {
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
                    "is-danger": isFinished && !isWon,
                 })}>
                    <div className="hero-body">
                        <div className="container">
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
