import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissionsData = createAsyncThunk('missions/getData', async () => {
  const response = await axios('https://api.spacexdata.com/v3/missions');
  return response.data;
});

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    value: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getMissionsData.pending]: (state) => {
      state.status = 'loading';
    },
    [getMissionsData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload;
    },
  },
});

export default missionSlice.reducer;
