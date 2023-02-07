const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },

  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    deleteUser(state, { payload }) {
      state.users = state.users.filter(user => user.id !== payload);
    },
    toggleStatus(state, { payload }) {
      state.users = state.users.map(user => {
        if (user.id === payload) {
          return { ...user, status: user.status === 'yes' ? 'no' : 'yes' };
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, toggleStatus } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
