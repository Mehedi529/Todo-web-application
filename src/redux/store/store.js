const { loadStateFromLocalStorage, saveStateToLocalStorage } = require("@/app/utility/localStorage");
const { configureStore } = require("@reduxjs/toolkit");
const todoReducer = require("@/redux/state/todoSlice").default;

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({

    reducer:{
        todo:todoReducer
    },
    preloadedState,
})

store.subscribe(()=>{
    saveStateToLocalStorage({
        todo: store.getState().todo,
    })
})

export default store;