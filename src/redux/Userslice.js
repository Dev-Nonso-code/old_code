import {createSlice} from '@reduxjs/toolkit'
const initialState ={
    alluser:[],
    isfetching:false,
    fetcherror:null
}

export const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        Fetchinguser:(state)=>{
          state.alluser = []
          state.isfetching = true
          state.fetcherror = null
        },
        Fetchingsuccessful:(state, action)=>{
            state.alluser = action.payload
            state.isfetching = false
            state.fetcherror = null  
        },
        Fetchingfailed:(state, action)=>{
            state.alluser = []
            state.isfetching = false
            state.fetcherror = action.payload 
        }


    }
})
export default userslice.reducer
export const {Fetchingfailed, Fetchingsuccessful, Fetchinguser} = userslice.actions