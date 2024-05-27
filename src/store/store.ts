import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import messagesSlice from './slices/messagesSlice';
import currentUserSlice from './slices/currentUserSlice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    messages: messagesSlice.reducer,
    currentUser: currentUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
