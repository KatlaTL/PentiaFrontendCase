import { configureStore } from "@reduxjs/toolkit";
import documentTitleReducer from "../features/documentTitleSlice";

export const store = configureStore({
    reducer: {
        documentTitle: documentTitleReducer
    }
});