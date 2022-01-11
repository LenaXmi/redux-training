import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./counter-actions";

//Vanilla redux
// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

const valueReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

const stepReducer = (state = 5, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;

//Стандартная функция редьюсера
// const reducer = (state = {}, action) => {return state}

//Предыдущая версия редьюсера
// const counterReducer = (state=counterInitialState, {type,payload}) => {
//       switch (type) {
//     case "counter/Increment":
//       return {
//        ...state,value:state.value+payload
//       };
//     case "counter/Decrement":
//       return {
//        ...state,value:state.value+payload
//       };
//     default:
//       return state;
//   }
// }
