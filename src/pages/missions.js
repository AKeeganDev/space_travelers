import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissionsData } from '../redux/missions/missions';

const Missions = () => {
  const { value, status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'success' || status === 'loading') {
      return;
    }
    dispatch(getMissionsData());
  }, [dispatch]);

  console.log(value.mission_id);

  return (
    <>
      {value.map((mission) => (
        <div key={mission.mission_id}>
          <span>{mission.mission_id}</span>
          <br />
        </div>
      ))}
    </>
  );
};

export default Missions;
