import firebase from "./firebase";
import { ACTIVE } from "./game";
import shortid from "shortid";

export const INIT_PLAYER_1 = "INIT_PLAYER_1";
export const INIT_PLAYER_2 = "INIT_PLAYER_2";
export const PLAYER_1 = "PLAYER_1";
export const PLAYER_2 = "PLAYER_2";
export const MOVE = "MOVE";

export function init(initialId) {
    return dispatch => {
        const db = firebase.database();

        if (initialId) {
            // If it has an initialId this means that this is a challange
            dispatch({ type: INIT_PLAYER_2, id: initialId });

            db.ref(`games/${initialId}/p2`).set(ACTIVE);

            // Subscribe to opponent's moves
            db.ref(`games/${initialId}/p1`).on("value", snapshot => {
                dispatch({ type: PLAYER_1, move: snapshot.val() });
            });
        } else {
            // If no initialId this means that its a new game
            const id = shortid.generate();
            dispatch({ type: INIT_PLAYER_1, id: id });

            db.ref(`games/${id}/p1`).set(ACTIVE);

            // Subscribe to opponent's moves
            db.ref(`games/${id}/p2`).on("value", snapshot => {
                dispatch({ type: PLAYER_2, move: snapshot.val() });
            });
        }
    };
}

export function performMove(move) {
    return (dispatch, getState) => {
        const db = firebase.database();
        const state = getState();
        dispatch({ type: MOVE, move: move });

        // Send your move to the opponent
        db.ref(`games/${state.id}/${state.p}`).set(move);
    };
}
