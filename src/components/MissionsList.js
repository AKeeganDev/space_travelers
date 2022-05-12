import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';
import './missions.css';

const MissionsList = (props) => {
  const {
    id, name, desc, joined,
  } = props;
  const [reserved, setReserved] = useState('');
  const [isMember, setMember] = useState('Not a member');
  const dispatch = useDispatch();

  const toggleClass = (missionId) => {
    if (joined) {
      setReserved('');
      setMember('Not a member');
    } else {
      setReserved('joined');
      setMember('Active member');
    }
    dispatch(joinMission(missionId));
  };

  return (
    <>
      <td>{name}</td>
      <td>{desc}</td>
      <td className={reserved}>{isMember}</td>
      <td>
        <button onClick={() => toggleClass(id)} type="button">
          Join Mission
        </button>
      </td>
    </>
  );
};

MissionsList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionsList;
