import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API/API.ts';
import { UserT } from 'types/index';

interface UsersState {
  users: UserT[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk<UserT[]>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    const response = await API.users.get();

    if (response.status !== 200) {
      return rejectWithValue('Произошла ошибка');
    }

    return response.data.answer.users;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectUsers: (state) => state.users,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export const { selectUsers } = usersSlice.selectors;

export default usersSlice;
