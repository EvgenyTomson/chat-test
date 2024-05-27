import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API/API.ts';

interface CurrentUserState {
  id: string;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: CurrentUserState = {
  id: '',
  status: 'idle',
  error: null,
};

export const fetchCurrentUser = createAsyncThunk<string>(
  'currentUser/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    const response = await API.me.get();

    if (response.status !== 200) {
      return rejectWithValue('Произошла ошибка');
    }

    return response.data.answer.me.id;
  }
);

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  selectors: {
    selectCurrentUserId: (state) => state.id,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.id = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export const { selectCurrentUserId } = currentUserSlice.selectors;

export default currentUserSlice;
