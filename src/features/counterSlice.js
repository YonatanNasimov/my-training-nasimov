import { createSlice} from '@reduxjs/toolkit';


const initValue = {
    counter:99
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initValue,
    reducers: {
        add1:(state,actions) => {
            state.counter++;
        }
    }

})

export const {add1} = counterSlice.actions
export default counterSlice.reducer