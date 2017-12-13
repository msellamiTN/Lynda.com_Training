import C from "../constants";
import {combineReducers } from "redux";

export const goal = (state=10, action) => {
    return (action.type === C.SET_GOAL) ?
    Number(action.payload):
    state
}

export const skiDay = (state=null, action) => {
    return (action.type === C.ADD_DAY) ?
    action.payload:
    state
}

export const errors = (state=null, action) => {
    switch(action.type) {

        case C.ADD_ERROR :
            return [
                ...state,
                action.payload
            ];

        case C.CLEAR_ERROR :
            return state.filter((messsage,i) => i > action.payload);
        
        default:
            return state;
    }
}

export const allSkiDays = (state=[], action) => {
    switch(action.type) {

        case C.ADD_DAY :
            const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date);
            return (hasDayAlready) ?
            state :
            [
                ...state,
                skiDay(null,action)
            ];

        case C.REMOVE_DAY :
            return state.filter((skiDay, i) => { skiDay.date !== action.payload})
        
        default:
            return state;
    }
}

export const fetching = (state=false, action) => {
    switch(action.type) {
        
        case C.CHANGE_SUGGESTIONS:
        case C.CANCEL_FETCHING:
            return false;

        case C.FETCH_RESORT_NAMES:
            return true;

        default:
            return state;
    }
}

export const suggestions = (state=[], action) => {
    switch(action.type) {
        case C.CLEAR_SUGGESTIONS:
            return [];

        case C.CHANGE_SUGGESTIONS:
            return action.payload;

        default:
            return state;
    }
}


export default combineReducers({
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
});