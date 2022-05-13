/* eslint react/prop-types: 0 */
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import missionReducer from '../redux/missions/missions';
import mockMissionData from './__mock__/mockMissionData';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { missions: missionReducer }, preloadedState }),
    ...renderOptions
  } = { mockMissionData },
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export default render;
