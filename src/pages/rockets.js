const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets.value);
  console.log(rocketData);
  return (<div>Rockets</div>);
};

export default Rockets;
