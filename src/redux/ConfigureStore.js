import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import Post from "./modules/post";
import User from "./modules/user";
import Image from "./modules/image";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    post : Post,
    user : User,
    image : Image,
    router : connectRouter(history),   // 이거 없으면 Error: Could not find router reducer in state tree, it must be mounted under "router" 에러뜸
});

const middlewares = [thunk.withExtraArgument({ history: history })]; // history를 마들웨어에서 사용하려면 필요.

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
