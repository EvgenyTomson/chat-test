import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'API/API.ts';
import { MessageT } from 'types/index';

interface MessagesState {
  messages: MessageT[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: MessagesState = {
  messages: [],
  status: 'idle',
  error: null,
};

export const fetchMessages = createAsyncThunk<MessageT[]>(
  'messages/fetchMessages',
  async (_, { rejectWithValue }) => {
    const response = await API.messages.get();

    if (response.status !== 200) {
      return rejectWithValue('Произошла ошибка');
    }

    return response.data.answer.messages;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  selectors: {
    selectMessages: (state) => state.messages,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export const { selectMessages } = messagesSlice.selectors;

export default messagesSlice;
