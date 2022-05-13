import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';
import './missions.css';

const MissionsList = (props) => {
  const {
    id, name, desc, joined,
  } = props;
  const [reserved, setReserved] = useState(
    joined ? 'joined' : 'not-joined',
  );
  const [isMember, setMember] = useState(
    joined ? 'Active Member' : 'NOT A MEMBER',
  );
  const [isJoined, setJoined] = useState(
    joined ? 'Leave Mission' : 'Join Mission',
  );
  const dispatch = useDispatch();

  const toggleClass = (missionId) => {
    if (joined) {
      setReserved('not-joined');
      setMember('NOT A MEMBER');
      setJoined('Join Mission');
    } else {
      setReserved('joined');
      setMember('Active member');
      setJoined('Leave Mission');
    }
    dispatch(joinMission(missionId));
  };

  return (
    <>
      <td className="mission-name">{name}</td>
      <td>{desc}</td>
      <td className="status-table">
        <span className={reserved}>{isMember}</span>
      </td>
      <td>
        <button className={reserved} onClick={() => toggleClass(id)} type="button">
          {isJoined}
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
