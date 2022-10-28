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
        },
        reastCounter:(state,actions) => {
            state.counter = 0;
        },
        addcustom:(state,actions) => {
            state.counter += actions.payload.counterVal;
        }
    }
})

export const {add1,reastCounter,addcustom} = counterSlice.actions
export default counterSlice.reducer