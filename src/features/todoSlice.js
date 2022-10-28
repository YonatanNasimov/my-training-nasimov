import {createSlice} from "@reduxjs/toolkit"

const initState = {
    todo_ar:[
        {exerciseName:"push ups",numberOfSets:4,numberOfRepetitions:15,muscleGroup:"Chest",id:1},
        {exerciseName:"push ups",numberOfSets:4,numberOfRepetitions:15,muscleGroup:"Chest",id:2}
    ]
}

const todoSlice = createSlice({
    name:"todos",
    initialState:initState,
    reducers:{

    }
})

export default todoSlice.reducer;