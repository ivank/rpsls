import firebase from "./firebase";
import { ACTIVE } from "./game";
import shortid from "shortid";
export const INIT = "INIT";

export function init() {
    return dispatch => {
        const id = window.location.hash || shortid.generate();

        dispatch({ type: "INIT", state: { id: id, p: "p1", p1: ACTIVE, p2: null } });

        if (id) {
            firebase
                .database()
                .ref(`games/${id}`)
                .once("value", snapshot => {
                    const game = snapshot.val();
                    dispatch({
                        type: "INIT",
                        state: Object.assign({ id: id, p: game ? "p2" : "p1" }, game),
                    });
                });
        } else {
            dispatch({ type: "INIT", state: { id: id, p: "p1", p1: ACTIVE, p2: null } });
        }
    };
}
