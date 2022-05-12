import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

// Return 1 container That has 2 lists. One for all True missions, One for all true Reservations

const MyProfile = () => {
  const missionList = useSelector((state) => state.missions.value.filter(
    (mission) => mission.joined === true,
  ));

  const rocketList = useSelector((state) => state.rockets.value.filter(
    (rocket) => rocket.reserved === true,
  ));

  return (
    <div className="profileContainer">
      <div className="listContainer">
        <span className="listName">My Missions</span>
        <ul className="missionList">
          {missionList.map((mission) => (
            <li
              key={mission.mission_id}
              className="listItem"
            >
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="listContainer">
        <span className="listName">My Rockets</span>
        <ul className="rocketList">
          {rocketList.map((rocket) => (
            <li
              key={rocket.id}
              className="listItem"
            >
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
