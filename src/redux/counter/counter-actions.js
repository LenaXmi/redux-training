import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/Increment");
export const decrement = createAction("counter/Decrement");

//Vanilla redux
// export const increment = (value) => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = (value) => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
