import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "./actions";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(init());
    }

    render() {
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
                             value={this.props.id}
                            />
                        </div>
                        <div className="control">
                            <a className="button is-info">Copy</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        id: state ? state.id : "",
    };
};

export default connect(mapStateToProps)(App);
