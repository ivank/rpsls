import { INIT } from "./actions";

export default function reducers(state = {}, action) {
    switch (action.type) {
        case INIT:
            return Object.assign({}, action.state);
    }
}
