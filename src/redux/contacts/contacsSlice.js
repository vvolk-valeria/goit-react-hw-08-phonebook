import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
     //* статус "pending"
    // [fetchContacts.pending]: handlePending,
    // [addContact.pending]: handlePending,
    // [deleteContact.pending]: handlePending,
    .addCase(fetchContacts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(addContact.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(deleteContact.pending, (state)=>{
      state.isLoading = true;
    })
   
  //* статус "rejected"  
    // [fetchContacts.rejected]: handleRejected,
    // [addContact.rejected]: handleRejected,
    // [deleteContact.rejected]: handleRejected,
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
   
  //* статус "fulfilled"  
    // [fetchContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(item => item.id === action.payload.id);
    //   state.items.splice(index, 1);
    // },
    // [logOut.fulfilled](state, action) {
    //   state.items = [];
    //   state.error = null;
    //   state.isLoading = false;
    //  },
  .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
  .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
  .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1);
    })
  .addCase(logOut.fulfilled, (state, action) => {
      state.items = [];
      state.error = null;
      state.isLoading = false;
     }),
});

export const contactsReducer = contactsSlice.reducer;
