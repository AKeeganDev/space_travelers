import { useSelector } from 'react-redux';
import RocketCard from '../components/rocketCard';

const Rockets = () => {
  const rocketData = useSelector((state) => state.rockets.value);

  return (
    <div className="rocketContainer">
      <ul>
        {rocketData.map((rocket) => (
          <li key={rocket.id}>
            <RocketCard
              rocketID={rocket.id}
              imgSource={rocket.flickr_images}
              rocketName={rocket.rocket_name}
              rocketDescription={rocket.description}
              reserved={rocket.reserved}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
