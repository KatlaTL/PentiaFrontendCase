import { createSlice } from "@reduxjs/toolkit";

export const documentTitleSlice = createSlice({
    name: "documentTitle",
    initialState: {
        title: "Pentia"
    },
    reducers: {
        setDocumentTitle: (state, action) => {
            if (action.payload) {
                state.title = action.payload;
            }
        }
    }
});

export const { setDocumentTitle } = documentTitleSlice.actions;
export const getDocumentTitle = (state) => state.documentTitle.title;

export default documentTitleSlice.reducer;