import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const exampleInitialState = {
  transactions: [],
  center: {},
  success: false,
};

export const actionTypes = {
  GET_TRANSACTION: "GET_TRANSACTION",
  GET_TRANSACTION_DETAILS: "GET_TRANSACTION_DETAILS",
  GET_PAYLOAD: "GET_PAYLOAD",
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  console.log("ACTION", action.type);
  switch (action.type) {
    case actionTypes.GET_TRANSACTION:
      return Object.assign(
        {},
        state,
        {
          transactions: action.data,
        },
        { success: true },
      );
    case actionTypes.GET_TRANSACTION_DETAILS:
      return {
        state,
        ...center,
        lat: action.data.latitude,
        lng: action.data.latitude,
      };

    default:
      return state;
  }
};

// ACTIONS
export const getTransaction = data => {
  return { type: actionTypes.GET_TRANSACTION, data };
};
export const getTransactionDetails = data => {
  return { type: actionTypes.GET_TRANSACTION_DETAILS, data };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
