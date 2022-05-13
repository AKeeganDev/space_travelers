import missionReducer, { joinMission } from '../redux/missions/missions';
import mockMissionData from './__mock__/mockMissionData';
import Missions from '../pages/missions';
import render, { screen } from './mission-test-utils';
import '@testing-library/jest-dom';

describe('Testing mission functionality', () => {
  test('should return the right value', () => {
    expect(missionReducer({ value: [mockMissionData] }, joinMission('F4F83DE'))).toEqual({
      value: [
        {
          mission_id: 'F4F83DE',
          mission_name: 'Telstar',
          description:
            'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
          joined: true,
        },
      ],
    });
  });
});

describe('tests rendering in DOM', () => {
  it('renders the Mission Correctly in the DOM', () => {
    render(<Missions />);
    expect(screen.getByText(/Status/)).toBeInTheDocument();
  });
});
