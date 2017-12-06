import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "../actions";
import { trimCharsStart, pick } from "lodash/fp";
import copyToClipboard from "copy-to-clipboard";
import Moves from "./Moves";
import Versus from "./Versus";

export class App extends Component {
    componentDidMount() {
        const initialId = trimCharsStart("#", window.location.hash);
        this.props.dispatch(init(initialId));
    }

    render() {
        const opponentUrl = process.env.REACT_APP_WEB + "#" + this.props.id;

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Rock Paper Scissors Lizard Spock</h1>
                            <h2 className="subtitle">A Game</h2>
                        </div>
                    </div>
                </section>
                <section className="center">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                             className="input"
                             type="text"
                             readOnly={true}
                             value={opponentUrl}
                            />
                        </div>
                        <div className="control">
                            <button
                             className="button is-info"
                             onClick={() => copyToClipboard(opponentUrl)}>
                                Copy
                            </button>
                        </div>
                    </div>
                </section>
                <Versus />
                <Moves />
            </div>
        );
    }
}

export default connect(pick("id"))(App);
