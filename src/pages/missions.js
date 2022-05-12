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

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </tbody>
      </table>
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
    </>
  );
};

export default missions;
