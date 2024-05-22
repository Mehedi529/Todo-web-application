import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({

    name:"todo",
    initialState:{
        value:[],
        currentPage:1,
        itemsPerPage:5,
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.value.push(action.payload)
        },

        RemoveTodo:(state,action)=>{
            state.value.splice(action.payload,1);
            const totalItems = state.value.length;
            const totalPages = Math.ceil(totalItems / state.itemsPerPage);
            if(state.currentPage > totalPages){
                state.currentPage = totalPages;
            }
        },

        EditTodo:(state,action)=>{
            const {index,title,description} = action.payload;
            if(state.value[index]){
                state.value[index] = {title,description};
            }
        },

        SetCurrentPage:(state,action)=>{
            state.currentPage = action.payload;
        },
        SetItemsPerPage: (state,action)=>{
            state.itemsPerPage = action.payload;
        }
    }
})

export const {AddTodo, RemoveTodo, EditTodo, SetCurrentPage, SetItemsPerPage} = todoSlice.actions;
export default todoSlice.reducer;