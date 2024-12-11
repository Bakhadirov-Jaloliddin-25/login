import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addUser(state, action) {
      localStorage.setItem(
        "users",
        JSON.stringify([...state.value, action.payload])
      );
      state.value.push(action.payload);
      alert("Username added successfully");
    },
    deleteUser(state, action) {
      const updatedUsers = state.value.filter(
        (user) => user.id !== action.payload.id
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      state.value = updatedUsers;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
