import {createSlice} from "@reduxjs/toolkit"

const initState = {
    todo_ar:[
        {exerciseName:"push ups",numberOfSets:4,numberOfRepetitions:15,muscleGroup:"Chest",id:1},
        {exerciseName:"push ups2",numberOfSets:3,numberOfRepetitions:12,muscleGroup:"Back",id:2}
    ]
}

const todoSlice = createSlice({
    name:"todos",
    initialState:initState,
    reducers:{
        addNewItem:(state,action) => {
            state.todo_ar.push(action.payload.todoItem)
        }
    }
})

export const {addNewItem} = todoSlice.actions;
export default todoSlice.reducer;