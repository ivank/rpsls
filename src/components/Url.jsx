import React from "react";
import copyToClipboard from "copy-to-clipboard";
import { pick } from "lodash/fp";
import { connect } from "react-redux";

export function Url({ id, loading }) {
    const opponentUrl = process.env.REACT_APP_URL + "#" + id;

    return (
        <div className="field has-addons">
            <div className="control is-expanded has-icons-right">
                <input
                 className="input is-full-width"
                 type="text"
                 readOnly={true}
                 value={opponentUrl}
                />
                {loading ? (
                    <span className="icon is-right">
                        <i className="fa fa-circle-o-notch fa-spin fa-fw" />
                    </span>
                ) : null}
            </div>
            <div className="control">
                <button
                 className="button is-info"
                 onClick={() => copyToClipboard(opponentUrl)}>
                    Copy
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = pick(["id", "loading"]);

export default connect(mapStateToProps)(Url);


