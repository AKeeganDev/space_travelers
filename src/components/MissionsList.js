import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMissionsData, joinMission } from '../redux/missions/missions';
import './missions.css';

const MissionsList = () => {
  const { value, status } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const [reserved, setReserved] = useState('notActive');

  useEffect(() => {
    if (status === 'success' || status === 'loading') {
      return;
    }
    dispatch(getMissionsData());
  }, [dispatch]);

  const toggleClass = (id) => {
    if (isActive) {
      setReserved('active');
    } else {
      setReserved('notActive');
    }
    setActive(!isActive);
    dispatch(joinMission(id));
  };

  console.log(value);

  const tableContent = value.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>Not a member</td>
      <td>
        <button className={reserved} onClick={() => toggleClass(mission.mission_id)} type="button">
          Join Mission
        </button>
      </td>
    </tr>
  ));

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
          {tableContent}
        </tbody>
      </table>
    </>
  );
};

export default MissionsList;
