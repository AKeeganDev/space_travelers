import { useSelector } from 'react-redux';

const Missions = () => {
  const mission = useSelector((state) => state.missions.value);

  console.log(mission);
  return <div>Missions</div>;
};

export default Missions;
