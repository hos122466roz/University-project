import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import rooted from "./min";
import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loading"],
};
const persistedReducer = persistReducer(persistConfig, rooted);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
export default store;
// const store = createStore(rooted, applyMiddleware(thunk));
// export default store;
