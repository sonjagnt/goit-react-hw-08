import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updContact,
} from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updContact.pending, handlePending)
      .addCase(updContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const newContact = action.payload;
        const index = state.items.findIndex((i) => i.id === newContact.id);
        if (index !== -1) {
          state.items[index] = newContact;
        }
      })
      .addCase(updContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export default slice.reducer;
