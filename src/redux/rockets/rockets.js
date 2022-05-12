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
  reducers: {
    changeRocketReservation: (state, action) => {
      const index = state.value.findIndex((rocket) => rocket.id === action.payload);
      state.value[index].reserved = !state.value[index].reserved;
    },
  },
  extraReducers: {
    [getRocketData.fulfilled]: (state, action) => {
      state.value = action.payload.map((rocket) => ({
        id: rocket.id,
        flickr_images: rocket.flickr_images[0],
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        reserved: Boolean(false),
      }));
    },
  },
});

export const { changeRocketReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
