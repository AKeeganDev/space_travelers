import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets.value);
  rocketData.forEach((element) => {
    console.log(element.id);
  });
  return <div>Rockets</div>;
};

export default Rockets;
