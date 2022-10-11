import React from 'react'
export const initialState = {
    carts: [
      {  
        }       
  ],
};
export const reducer = (state=initialState,action) => {
    switch (action.type) {
        case "SET_PRODUCT": return { ...state, carts: [action.payload] }
        default: return state;
    }
}
