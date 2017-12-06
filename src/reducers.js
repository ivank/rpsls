import { ACTIVE } from "./game";
import { INIT_PLAYER_1, INIT_PLAYER_2, PLAYER_1, PLAYER_2 } from "./actions";
import { assign, set } from "lodash/fp";

export default function reducers(state, action) {
    switch (action.type) {
        case INIT_PLAYER_1:
            return assign(state, { id: action.id, p: "p1", p1: ACTIVE });
        case INIT_PLAYER_2:
            return assign(state, { id: action.id, p: "p2", p2: ACTIVE });
        case PLAYER_1:
            return set("p1", action.move, state);
        case PLAYER_2:
            return set("p2", action.move, state);

        default:
            return state;
    }
}
