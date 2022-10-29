import { createSlice } from "@reduxjs/toolkit"

const KEY_LOCAL = "todo_local";

const initState = localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL]) : {
    todo_ar: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initState,
    reducers: {
        addNewItem: (state, action) => {
            state.todo_ar.push(action.payload.todoItem);
            saveToLocal(state);
        },
        resetAllItems: (state, action) => {
            state.todo_ar = [];
            saveToLocal(state);
        },
        deleteSingleItem: (state, action) => {
            state.todo_ar = state.todo_ar.filter
                (
                    (item) => item.id != action.payload.delId
                )
            saveToLocal(state);
        }
    }
})

const saveToLocal = (state) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const { addNewItem, resetAllItems, deleteSingleItem } = todoSlice.actions;
export default todoSlice.reducer;