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
  reducers: {
    joinMission: (state, action) => {
      const index = state.value.findIndex((id) => id.mission_id === action.payload);
      state.value[index].joined = !state.value[index].joined;
    },
  },
  extraReducers: {
    [getMissionsData.pending]: (state) => {
      state.status = 'loading';
    },
    [getMissionsData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        joined: false,
      }));
    },
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
