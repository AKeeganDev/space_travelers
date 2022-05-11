import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeRocketReservation } from '../redux/rockets/rockets';
import '../styles/rocketCard.css';

const RocketCard = (props) => {
  const dispatch = useDispatch();

  const {
    imgSource, rocketName, rocketDescription, reserved, rocketID,
  } = props;

  const classNameKey = {
    reserved: {
      classNames: 'reserveButton reserved',
      buttonText: 'Cancel Reservation',
      badge: 'badge visible',
    },
    notReserved: {
      classNames: 'reserveButton notReserved',
      buttonText: 'Reserve Rocket',
      badge: 'badge',
    },
  };

  const [isActive, setActive] = useState(reserved);
  const [classNames, setClassNames] = useState(
    reserved ? classNameKey.reserved.classNames : classNameKey.notReserved.classNames,
  );
  const [buttonText, setButtonText] = useState(
    reserved ? classNameKey.reserved.buttonText : classNameKey.notReserved.buttonText,
  );
  const [spanVisibility, setSpanVisibility] = useState(
    reserved ? classNameKey.reserved.badge : classNameKey.notReserved.badge,
  );

  const setReserved = (id) => {
    setActive(!isActive);
    if (classNames === classNameKey.reserved.classNames) {
      setClassNames(classNameKey.notReserved.classNames);
      setButtonText('Reserve Rocket');
      setSpanVisibility(classNameKey.notReserved.badge);
    } else {
      setClassNames(classNameKey.reserved.classNames);
      setButtonText('Cancel Reservation');
      setSpanVisibility(classNameKey.reserved.badge);
    }
    dispatch(changeRocketReservation(id));
  };
  // displays the reserved badge above the rocket description text
  const Badge = () => (
    <span className={spanVisibility}>Reserved</span>
  );

  return (
    <div className="rocketCard">
      <img className="rocketImage" src={imgSource} alt="" />
      <div className="rocketDetailsContainer">
        <span className="rocketTitle">{rocketName}</span>
        <p className="rocketDetails">
          <Badge />
          {rocketDescription}
        </p>
        <button
          type="button"
          className={classNames}
          onClick={() => {
            setReserved(rocketID);
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketID: PropTypes.number.isRequired,
  imgSource: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
