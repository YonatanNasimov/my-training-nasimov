import { createSlice} from '@reduxjs/toolkit';


const initValue = {
    counter:99
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initValue,
    reducers: {

    }

})

export default counterSlice.reducer