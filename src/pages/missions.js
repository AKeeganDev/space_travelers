import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsList from '../components/MissionsList';
import { getMissionsData } from '../redux/missions/missions';

const missions = () => {
  const { value, status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'success' || status === 'loading') {
      return;
    }
    dispatch(getMissionsData());
  }, [dispatch]);

  const statusStyle = {
    width: '9rem',
  };

  return (
    <div className="mission-table">
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th style={statusStyle}>Status</th>
            <th style={statusStyle}> </th>
          </tr>
          {value.map((mission) => (
            <tr key={mission.mission_id}>
              <MissionsList
                id={mission.mission_id}
                name={mission.mission_name}
                desc={mission.description}
                joined={mission.joined}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default missions;
