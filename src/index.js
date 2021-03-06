import "./index.css";
import React from "react";
import { render } from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import App from "./components/App.jsx";
import reducers from "./reducers";

const store = createStore(
    reducers,
    { id: "" },
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
