
import { configureStore } from '@reduxjs/toolkit'
import user from '../slice/slice'
export default configureStore({
    reducer: {
        username: user,
    },
})