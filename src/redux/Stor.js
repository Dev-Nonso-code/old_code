import {configureStore} from '@reduxjs/toolkit'
import Countslice from './Countslice'
import  userslice from './Userslice'

export default configureStore({
     reducer:{
        Countslice,
        userslice
     }
})