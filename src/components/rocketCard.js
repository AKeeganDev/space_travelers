import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/rocketCard.css';

const RocketCard = (props) => {
  const {
    imgSource, rocketName, rocketDescription, reserved,
  } = props;

  const [isActive, setActive] = useState(reserved);
  const [classNames, setClassNames] = useState('reserveButton notReserved');
  const [buttonText, setButtonText] = useState('Reserve Rocket');

  const classNameKey = {
    reserved: {
      classNames: 'reserveButton reserved',
      buttonText: 'Reserve Rocket',
    },
    notReserved: {
      classNames: 'reserveButton notReserved',
      buttonText: 'Cancel Reservation',
    },
  };

  const setReserved = () => {
    if (classNames === classNameKey.reserved.classNames) {
      setClassNames(classNameKey.notReserved.classNames);
      setButtonText('Reserve Rocket');
    } else {
      setClassNames(classNameKey.reserved.classNames);
      setButtonText('Cancel Reservation');
    }

    setActive(!isActive);
  };

  return (
    <div className="rocketCard">
      <img className="rocketImage" src={imgSource} alt="" />
      <div className="rocketDetailsContainer">
        <span className="rocketTitle">{rocketName}</span>
        <p className="rocketDetails">{rocketDescription}</p>
        <button
          type="button"
          className={classNames}
          onClick={() => {
            setReserved();
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
