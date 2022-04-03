import { createStore } from "redux";

const reducerFn =(state = { counter: 0}, action)=>{
    // kita tidak boleh mengubah keadaan state aslinya 
    if (action.type === "INC") {
        return { counter: state.counter + 1}
    }
    if (action.type === "DEC") {
        return { counter: state.counter - 1}
    }
    if (action.type === "ADD") {
        return { counter: state.counter + 10}
    }
    return state
}

const store = createStore(reducerFn)
export default store