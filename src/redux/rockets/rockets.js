import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRocketData = createAsyncThunk('rockets/getData', async () => {
  const response = await axios('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [getRocketData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default rocketsSlice.reducer;
