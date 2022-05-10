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
  },
  reducers: {},
  extraReducers: {
    [getMissionsData.fulfilled]: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export default missionSlice.reducer;
