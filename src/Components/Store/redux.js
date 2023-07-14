import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./ui-slice";


const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    }
})

export default store;